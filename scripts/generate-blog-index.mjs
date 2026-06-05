import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogDir = path.join(__dirname, '../public/blog');
const outputFile = path.join(__dirname, '../public/posts.json');

// Create blog directory if it doesn't exist
if (!fs.existsSync(blogDir)) {
fs.mkdirSync(blogDir, { recursive: true });
console.log('⚠️  No blog directory found. Creating empty posts.json');
fs.writeFileSync(outputFile, JSON.stringify([], null, 2));
process.exit(0);
}

// Read all markdown files from the blog directory
const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));

if (files.length === 0) {
console.log('⚠️  No blog posts found. Creating empty posts.json');
fs.writeFileSync(outputFile, JSON.stringify([], null, 2));
process.exit(0);
}

const posts = files.map(filename => {
const filePath = path.join(blogDir, filename);
const fileContents = fs.readFileSync(filePath, 'utf8');
const { data, content } = matter(fileContents);

const slug = filename.replace('.md', '');

const wordCount = content.split(/\s+/).length;
const readingTime = Math.ceil(wordCount / 200);

return {
slug,
title: data.title || 'Untitled',
date: data.date || new Date().toISOString(),
excerpt: data.excerpt || content.substring(0, 150) + '...',
featuredImage: data.featuredImage || null,
tags: data.tags || [],
readingTime
};
});

posts.sort((a, b) => new Date(b.date) - new Date(a.date));

fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));

console.log(`✅ Generated blog index with ${posts.length} post(s)`);
