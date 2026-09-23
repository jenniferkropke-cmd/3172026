export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  featuredImage?: string;
  tags?: string[];
  readTime?: string;
  content: string; // HTML content - you can use <h1>, <h2>, <p>, etc.
}

export const blogPosts: BlogPost[] = [
  {
    slug: "seeds-of-service-grand-opening",
    title: "Seeds of Service: What We Planted, What Grew, and What Stayed With Me",
    date: "2026-08-31",
    excerpt: "How an empty room, a connection between two communities, and one unforgettable opening night became Seeds of Service—and sent me home with a poem I never planned to write.",
    featuredImage: "/images/uploads/grand-opening-hero.jpg",
    tags: ["Seeds of Service", "Servant Leadership", "Southwest Creative Studio", "Spoken Word", "Community"],
    readTime: "18 min read",
    content: `
      <p>On Saturday, August 29, we opened the doors to <strong>Seeds of Service</strong>.</p>

      <p>I had already seen the walls.</p>

      <p>I had already read the stories, talked through ideas, watched pieces come together, and stood inside the space.</p>

      <p>But there is a difference between building something and watching people experience it.</p>

      <p>Saturday night, people walked in.</p>

      <p>They stopped. They read. They took pictures. They wrote. They created. They talked to one another.</p>

      <p>And suddenly, something that had existed for months in conversations, ideas, emails, artwork, research, and a lot of <em>what if we tried this?</em> became real.</p>

      <h2>How Seeds of Service Began</h2>

      <p>My part in the story of Seeds of Service really began with two worlds that, at first, had nothing to do with one another.</p>

      <p>I had been working with Hamid and Azara through the <strong>Dehkhoda Educational Foundation</strong>, where I became deeply involved in work surrounding servant leadership and the idea that leadership does not have to begin with power, status, or authority.</p>

      <p>It can begin with service.</p>

      <p>At the same time, there was another connection already sitting in my life.</p>

      <p>Cena and I knew each other from college. Years later, Cena was doing work with <strong>Southwest Creative Studio</strong>, a space rooted in creativity, art, young people, community, and Chicago's Southwest Side.</p>

      <p>And eventually I had one of those thoughts that seems simple after the fact:</p>

      <p class="blog-pullquote"><em>These people need to know each other.</em></p>

      <p>I connected the two worlds.</p>

      <p>And from that connection, Seeds of Service began to grow.</p>

      <p>It became an opportunity to take the ideas behind servant leadership and ask a different question:</p>

      <p class="blog-pullquote"><strong>What would these ideas look like if people could actually walk inside them?</strong></p>

      <figure class="blog-media blog-wide">
        <img src="/images/uploads/before-seeds-of-service.jpg" alt="The empty Southwest Creative Studio space before Seeds of Service was installed" loading="lazy" />
        <figcaption>Before Seeds of Service took shape, this was the space we had to imagine into something entirely new.</figcaption>
      </figure>

      <p>Not in a traditional museum.</p>

      <p>Not in a quiet room filled only with labels and objects behind glass.</p>

      <p>But in a creative space where art, history, community, participation, and conversation could all live together.</p>

      <div class="blog-grid blog-grid-2 blog-wide" aria-label="Before and after views of the Seeds of Service museum">
        <figure class="blog-media">
          <img src="/images/uploads/listening-room-wide.jpg" alt="The completed Listening section of Seeds of Service" loading="lazy" />
          <figcaption>The completed Listening section.</figcaption>
        </figure>
        <figure class="blog-media">
          <img src="/images/uploads/stewardship-room-wide.jpg" alt="The completed Stewardship section of Seeds of Service" loading="lazy" />
          <figcaption>The completed Stewardship section.</figcaption>
        </figure>
      </div>

      <h2>What Does Servant Leadership Actually Mean?</h2>

      <p>Servant leadership turns our usual idea of leadership around.</p>

      <p>Instead of asking, <em>How do I get people to follow me?</em></p>

      <p>It asks:</p>

      <p class="blog-pullquote"><strong>How can I serve?</strong></p>

      <p>Seeds of Service is built around six principles:</p>

      <p class="principles-line"><strong>Listening. Empathy. Healing. Community and Circle Orientation. Hopeful Vision. Stewardship.</strong></p>

      <p><strong>Listening</strong> asks us to hear people fully, especially when their experiences are different from our own.</p>

      <p><strong>Empathy</strong> asks us to care enough to step outside of ourselves.</p>

      <p><strong>Healing</strong> asks us to acknowledge wounds instead of pretending they do not exist.</p>

      <p><strong>Community and Circle Orientation</strong> asks us to build spaces where people belong, where participation matters, and where leadership is not always sitting at the head of the table.</p>

      <p><strong>Hopeful Vision</strong> asks us to imagine something better and then begin doing the work required to create it.</p>

      <p><strong>Stewardship</strong> reminds us that what we have been given is not ours alone. We have a responsibility to take care of it for the people who come after us.</p>

      <p>The words themselves matter.</p>

      <p>But we did not want visitors to simply read definitions.</p>

      <p>We wanted people to <strong>feel what those ideas could mean.</strong></p>

      <div class="blog-grid blog-grid-4 blog-wide" aria-label="Servant leadership principles inside Seeds of Service">
        <figure class="blog-media">
          <img src="/images/uploads/listening-wall-detail.jpg" alt="Listening exhibit wall inside Seeds of Service" loading="lazy" />
          <figcaption>Listening</figcaption>
        </figure>
        <figure class="blog-media">
          <img src="/images/uploads/empathy-room-wide.jpg" alt="Empathy exhibit inside Seeds of Service" loading="lazy" />
          <figcaption>Empathy</figcaption>
        </figure>
        <figure class="blog-media">
          <img src="/images/uploads/hopeful-vision-detail.jpg" alt="Hopeful Vision exhibit inside Seeds of Service" loading="lazy" />
          <figcaption>Hopeful Vision</figcaption>
        </figure>
        <figure class="blog-media">
          <img src="/images/uploads/stewardship-room-wide.jpg" alt="Stewardship exhibit inside Seeds of Service" loading="lazy" />
          <figcaption>Stewardship</figcaption>
        </figure>
      </div>

      <h2>Making It Feel Like Southwest</h2>

      <p>This may be one of my favorite parts of the entire project.</p>

      <p>Seeds of Service could have easily become a traditional exhibition.</p>

      <p>A photograph. A biography. A label. Walk to the next one. Repeat.</p>

      <p>But that would not have felt right inside Southwest Creative Studio.</p>

      <p>So the museum became something else.</p>

      <p>Something more handmade. More colorful. More playful. More human. More alive.</p>

      <p>The walls themselves became art. The stories of servant leaders were surrounded by murals, historical objects, records, photographs, questions, activities, and opportunities for visitors to leave something of themselves behind.</p>

      <p>One area asks:</p>

      <p class="blog-pullquote"><strong>“What represents your community?”</strong></p>

      <p>And then invites visitors to show us using Play-Doh.</p>

      <figure class="blog-media">
        <img src="/images/uploads/community-playdoh-prompt.jpg" alt="Interactive Play-Doh prompt asking visitors what represents their community" loading="lazy" />
      </figure>

      <p>Elsewhere, visitors can respond to prompts and add their own words to the space.</p>

      <p>On one enormous painted tree, people literally add leaves containing their thoughts.</p>

      <figure class="blog-media blog-wide blog-feature-media">
        <img src="/images/uploads/visitor-writing-tree-leaf.jpg" alt="A visitor writing a message on a leaf for the interactive community tree" loading="lazy" />
        <figcaption>Visitors became part of the exhibit by adding their own words to the community tree.</figcaption>
      </figure>

      <p>That tree became one of my favorite things to watch during the opening.</p>

      <p>Because it changes.</p>

      <p>The museum is not completely finished when someone walks through the door.</p>

      <p>The people who enter it help build it.</p>

      <figure class="blog-media blog-wide">
        <img src="/images/uploads/community-tree-wide.jpg" alt="The large interactive painted tree inside Seeds of Service covered with visitor leaves" loading="lazy" />
      </figure>

      <p>And I think that is exactly what a museum about servant leadership should do.</p>

      <p>It should not only tell you about people who served their communities.</p>

      <p>It should quietly ask:</p>

      <p class="blog-pullquote"><strong>What are you going to do with yours?</strong></p>

      <h2>Then the Doors Opened</h2>

      <p>Saturday night, the museum stopped belonging only to the people who helped create it.</p>

      <p>Visitors began moving through the space, stopping at different stories, reading, photographing exhibits, responding to prompts, and talking.</p>

      <p>And watching people interact with something you helped build is a strange feeling.</p>

      <p>Because you lose control of it a little.</p>

      <p>In the best possible way.</p>

      <p>You know what <em>you</em> intended.</p>

      <p>But now someone else is standing in front of it bringing their own history, experiences, memories, questions, and emotions.</p>

      <p>They may notice something you never noticed. A story may mean something entirely different to them. A question might follow them home.</p>

      <p>That is when the work starts doing something you cannot plan.</p>

      <div class="blog-grid blog-grid-2 blog-wide" aria-label="Visitors exploring Seeds of Service during the grand opening">
        <figure class="blog-media">
          <img src="/images/uploads/visitor-exploring-listening.jpg" alt="A visitor exploring and photographing the Listening exhibit during the Seeds of Service grand opening" loading="lazy" />
        </figure>
        <figure class="blog-media">
          <img src="/images/uploads/visitor-exploring-stewardship.jpg" alt="A visitor photographing the Stewardship exhibit during the Seeds of Service grand opening" loading="lazy" />
        </figure>
      </div>

      <h2>And Then There Was Spoken Word</h2>

      <p>Art was not confined to the museum walls that night.</p>

      <p>We were also incredibly fortunate to experience live spoken word as part of the grand opening.</p>

      <p><strong>Ivan Ramos and the Shake Awake Ensemble</strong> performed Ramos's spoken word piece, <strong>“The People.”</strong></p>

      <p>There was something fitting about hearing a piece called <em>The People</em> inside a space built around service, community, listening, empathy, and our responsibility to one another.</p>

      <p>And later, <strong>Vai Shakoor</strong> performed.</p>

      <p>I wish everyone reading this could have been standing in that room.</p>

      <p>There are some performances you enjoy in the moment, applaud, and move on from.</p>

      <p>And then there are performances that stay somewhere in your body.</p>

      <p>This was one of those for me.</p>

      <section class="artist-spotlight blog-wide" aria-labelledby="vai-shakoor-heading">
        <div class="artist-spotlight-copy">
          <p class="artist-kicker">Artist Spotlight</p>
          <h3 id="vai-shakoor-heading">Vai Shakoor</h3>
          <p>Vai is a spoken word artist whose performance brought an entirely different energy into the space. If you are not already familiar with her work, please go find her. She was incredible.</p>
          <div class="artist-links">
            <a href="https://www.instagram.com/vaishakoor/" target="_blank" rel="noopener noreferrer">Instagram · @vaishakoor</a>
            <a href="https://www.tiktok.com/@vaishakoor" target="_blank" rel="noopener noreferrer">TikTok · @vaishakoor</a>
          </div>
        </div>
        <div class="blog-video-wrap">
          <video controls playsinline preload="metadata" poster="/images/uploads/vai-shakoor-performance-poster.jpg">
            <source src="/images/uploads/vai-shakoor-performance.mp4" type="video/mp4" />
            Your browser does not support embedded video.
          </video>
          <p class="video-caption">Vai Shakoor performing at the Seeds of Service grand opening.</p>
        </div>
      </section>

      <p>By the time I left Saturday night, there was a lot moving around inside of me.</p>

      <p>The museum.</p>

      <p>The stories.</p>

      <p>The people walking through it.</p>

      <p>Ivan and the Shake Awake Ensemble.</p>

      <p>Vai.</p>

      <p>The conversations.</p>

      <p>The words <strong>listening, empathy, healing, community, hope, stewardship</strong> that I had spent so much time thinking about while helping create this place.</p>

      <p>And then I went home.</p>

      <div class="poem-transition">
        <h2>The Next Morning, Poetry Started Falling Out of Me</h2>

        <p>I did not wake up Sunday morning intending to write a poem.</p>

        <p>There was no plan.</p>

        <p>No assignment.</p>

        <p>No thought that I needed to produce something because the museum had opened.</p>

        <p>The words just started coming.</p>

        <p>And they kept coming.</p>

        <p>Maybe that is what happens when you spend months helping build something around questions of humanity and leadership and then finally stand inside it while people bring those questions to life.</p>

        <p>Because servant leadership sounds beautiful when it is written on a museum wall.</p>

        <p>But the principles are not abstract.</p>

        <p>Listening matters because people are not being heard.</p>

        <p>Empathy matters because people are hurting.</p>

        <p>Healing matters because wounds do not disappear simply because we stop talking about them.</p>

        <p>Community matters because none of us survive entirely alone.</p>

        <p>Hope matters because there are moments when imagining something better is an act of resistance.</p>

        <p>And stewardship matters because eventually everything we are holding will be handed to someone else.</p>

        <p>By Sunday morning, all of that had become a question I could not stop thinking about:</p>

        <p class="blog-pullquote"><strong>Who deserves to be saved?</strong></p>
      </div>

      <section class="blog-poem-section blog-wide" aria-labelledby="poem-title">
        <div class="blog-poem">
          <h2 id="poem-title">WHO DESERVES TO BE SAVED?</h2>
      <p>There is a body on the table.</p>
      <p>It is still breathing.</p>
      <p>Barely.</p>
      <p>And somehow,<br/>instead of stopping the bleeding,<br/>we are arguing<br/>about who gets to hold the microphone.</p>
      <p>Somebody is checking the polls.</p>
      <p>Somebody is blaming the blood.</p>
      <p>Somebody is asking<br/>whether the wound<br/>was really that deep.</p>
      <p>Somebody is selling bandages<br/>with their own name printed on them.</p>
      <p>And the body—</p>
      <p>the body is us.</p>
      <p>A country<br/>with its ribs cracked open,<br/>its pulse stuttering,<br/>its mouth trying to say</p>
      <p>please</p>
      <p>while everyone in the room<br/>keeps talking over it.</p>
      <p>This is what happens<br/>when leadership forgets<br/>that its first job<br/>was never to be admired.</p>
      <p>It was to serve.</p>
      <p>Never to stand<br/>at the center of the emergency<br/>and make itself<br/>the story.</p>
      <p>But to kneel beside the wounded.</p>
      <p>To listen.</p>
      <p>To ask where it hurts.</p>
      <p>To put pressure on the bleeding<br/>without first demanding<br/>to know<br/>whether the person<br/>deserved the wound.</p>
      <p>But we have built<br/>a culture of leadership<br/>that keeps reaching<br/>for the crown</p>
      <p>while the country<br/>reaches<br/>for a tourniquet.</p>
      <p>We have confused<br/>attention with authority.</p>
      <p>Volume with courage.</p>
      <p>Cruelty with strength.</p>
      <p>Domination<br/>with leadership.</p>
      <p>We keep handing power<br/>to people<br/>who know how to command a room</p>
      <p>but have never learned<br/>how to enter one<br/>and ask,</p>
      <p>Who here<br/>has not been heard?</p>
      <p>Because listening<br/>should have been<br/>the first medicine.</p>
      <p>Instead,<br/>we learned to listen<br/>for weakness.</p>
      <p>For ammunition.</p>
      <p>For the sentence<br/>we can pull<br/>from somebody's mouth<br/>and sharpen<br/>into a weapon.</p>
      <p>Before they finish speaking,<br/>we are already building<br/>our rebuttal<br/>behind our teeth.</p>
      <p>We are a nation<br/>with our fingers<br/>in our ears</p>
      <p>screaming</p>
      <p>WHY DOESN'T ANYBODY<br/>UNDERSTAND ME?</p>
      <p>Listening is not waiting<br/>for your turn to speak.</p>
      <p>It is setting down<br/>your certainty.</p>
      <p>It is entering<br/>someone else's story<br/>without immediately<br/>trying to rewrite it.</p>
      <p>It is hearing someone say,</p>
      <p>I am hurting,</p>
      <p>and resisting the urge<br/>to explain<br/>why they shouldn't be.</p>
      <p>Because a country<br/>that cannot listen<br/>becomes a hospital<br/>where everyone<br/>has gone deaf.</p>
      <p>The monitors are screaming.</p>
      <p>The patient is bleeding.</p>
      <p>And everyone<br/>is debating<br/>the definition<br/>of blood.</p>
      <p>Empathy should have been<br/>our defibrillator.</p>
      <p>Instead,<br/>we turned compassion<br/>into weakness.</p>
      <p>As though a heart<br/>is only strong<br/>when it becomes stone.</p>
      <p>We watch people drown<br/>and critique<br/>the way they are swimming.</p>
      <p>We stand on shore<br/>with dry shoes</p>
      <p>and call the drowning<br/>irresponsible.</p>
      <p>We see somebody<br/>breaking beneath a weight<br/>we have never carried</p>
      <p>and ask<br/>why they are not<br/>standing straighter.</p>
      <p>But empathy gets wet.</p>
      <p>Empathy climbs<br/>into the water.</p>
      <p>It says,</p>
      <p>I may never know<br/>the exact shape<br/>of your storm,</p>
      <p>but I will not stand<br/>under a clear sky<br/>and judge<br/>the way you learned<br/>to survive it.</p>
      <p>It does not demand<br/>a perfect victim.</p>
      <p>It does not ask pain<br/>to become polite<br/>before we believe it.</p>
      <p>It says:</p>
      <p>You do not have<br/>to bleed more</p>
      <p>to prove to me<br/>that you are hurt.</p>
      <p>And maybe<br/>we would become<br/>a different country</p>
      <p>if before we asked,</p>
      <p>What is wrong with you?</p>
      <p>we asked,</p>
      <p>What happened to you?</p>
      <p>Who failed you?</p>
      <p>Who left?</p>
      <p>What broke?</p>
      <p>Who taught you<br/>that survival<br/>required armor?</p>
      <p>Because God,</p>
      <p>we are wounded.</p>
      <p>We are a country<br/>walking around<br/>with knives<br/>still inside us,</p>
      <p>insisting<br/>we are healed<br/>because the blood<br/>has dried.</p>
      <p>We talk about healing<br/>like it means<br/>moving on.</p>
      <p>It doesn't.</p>
      <p>Healing smells<br/>like antiseptic<br/>and confession.</p>
      <p>Healing means<br/>taking the bandage off.</p>
      <p>Looking.</p>
      <p>Not turning away.</p>
      <p>Saying:</p>
      <p>This happened.</p>
      <p>We did this.</p>
      <p>We allowed this.</p>
      <p>We inherited this.</p>
      <p>We ignored this.</p>
      <p>We buried this.</p>
      <p>And burying a wound<br/>is not healing.</p>
      <p>It is infection.</p>
      <p>We are very good<br/>at putting beautiful words<br/>over bullet holes.</p>
      <p>Very good<br/>at painting over cracks<br/>in the foundation.</p>
      <p>Very good<br/>at calling something</p>
      <p>history</p>
      <p>as though history<br/>means finished.</p>
      <p>But an old wound<br/>is still a wound.</p>
      <p>Pain can be inherited.</p>
      <p>Silence can be inherited.</p>
      <p>Fear can be inherited.</p>
      <p>And so can courage.</p>
      <p>But first<br/>we have to stop<br/>covering the wound.</p>
      <p>You cannot stitch<br/>someone's mouth shut<br/>and call it peace.</p>
      <p>You cannot silence pain<br/>and call the silence<br/>unity.</p>
      <p>Sometimes healing<br/>sounds like screaming.</p>
      <p>Sometimes healing<br/>is the sound<br/>of somebody<br/>everyone told to be quiet</p>
      <p>finally deciding—</p>
      <p>No.</p>
      <p>You will hear me.</p>
      <p>And that is why<br/>we need circles.</p>
      <p>Not stages.</p>
      <p>Not towers.</p>
      <p>Not thrones.</p>
      <p>Circles.</p>
      <p>Because circles<br/>terrify people<br/>who need hierarchy<br/>to feel important.</p>
      <p>There is no head seat<br/>in a circle.</p>
      <p>No lowest chair.</p>
      <p>No one condemned<br/>to stare<br/>at everybody else's back.</p>
      <p>A circle says:</p>
      <p>Look at each other.</p>
      <p>Really look.</p>
      <p>Your story<br/>must survive<br/>being in the same room<br/>as mine.</p>
      <p>Your humanity<br/>does not disappear<br/>because I am angry.</p>
      <p>Bring the parts<br/>of yourself<br/>that do not fit<br/>inside a slogan.</p>
      <p>There is room.</p>
      <p>And if there isn't—</p>
      <p>we move the chairs.</p>
      <p>Because community<br/>is not simply<br/>living beside each other.</p>
      <p>Bricks<br/>live beside each other.</p>
      <p>Community<br/>is mortar.</p>
      <p>It is what holds<br/>the weight.</p>
      <p>It is knowing<br/>the house next door<br/>is on fire</p>
      <p>and not asking<br/>who they voted for<br/>before you grab<br/>the hose.</p>
      <p>There is no such thing<br/>as</p>
      <p>their children.</p>
      <p>There are only children.</p>
      <p>No<br/>their hunger.</p>
      <p>Only hunger.</p>
      <p>No<br/>their grief.</p>
      <p>Only grief.</p>
      <p>And if freedom<br/>has to be rationed,</p>
      <p>it was never freedom<br/>to begin with.</p>
      <p>We have built<br/>so many fences<br/>we have forgotten<br/>we are standing<br/>in the same field.</p>
      <p>We draw borders<br/>through the roots</p>
      <p>and act surprised<br/>when the entire garden<br/>begins to die.</p>
      <p>We call our neighbor<br/>the weed.</p>
      <p>We convince ourselves<br/>the fence<br/>is more important<br/>than the field.</p>
      <p>That there is not<br/>enough sunlight<br/>for everyone.</p>
      <p>But gardens<br/>do not survive<br/>because one flower<br/>becomes king.</p>
      <p>They survive<br/>because everything underground<br/>understands</p>
      <p>what we keep forgetting:</p>
      <p>we are connected.</p>
      <p>Servant leadership<br/>does not stand<br/>over the garden<br/>with scissors.</p>
      <p>It gets down<br/>into the soil.</p>
      <p>Asks:</p>
      <p>What is missing?</p>
      <p>What has been poisoned?</p>
      <p>Who has not<br/>been watered?</p>
      <p>Who have we called<br/>a weed</p>
      <p>simply because<br/>we never bothered<br/>to learn<br/>their name?</p>
      <p>And then<br/>there is hope.</p>
      <p>Not optimism.</p>
      <p>I do not want<br/>optimism.</p>
      <p>Optimism is a poster<br/>hanging crooked<br/>in a burning building.</p>
      <p>Hope<br/>pulls the fire alarm.</p>
      <p>Hope<br/>kicks open the door.</p>
      <p>Hope<br/>gets smoke<br/>in its lungs.</p>
      <p>Hope has scars.</p>
      <p>Hope has buried people.</p>
      <p>Hope has watched promises<br/>rot.</p>
      <p>Hope has been disappointed<br/>so many times<br/>it should have learned<br/>to stay dead.</p>
      <p>And somehow—</p>
      <p>somehow—</p>
      <p>it gets up.</p>
      <p>Hope is not saying</p>
      <p>everything will be fine.</p>
      <p>Hope is looking directly<br/>at everything<br/>that is not fine</p>
      <p>and saying:</p>
      <p>Then we have work<br/>to do.</p>
      <p>Hope is a blueprint<br/>drawn<br/>with shaking hands.</p>
      <p>It looks at an empty lot<br/>and sees children<br/>running through sprinklers.</p>
      <p>Looks at a frightened child<br/>and sees an adult<br/>who may one day<br/>break the cycle.</p>
      <p>Looks at a table<br/>built for twelve</p>
      <p>and asks<br/>why there are only<br/>six chairs.</p>
      <p>Hope does not predict<br/>a better world.</p>
      <p>Hope becomes<br/>the construction crew.</p>
      <p>But what we build<br/>does not belong only<br/>to us.</p>
      <p>That is stewardship.</p>
      <p>And maybe stewardship<br/>is the most uncomfortable truth<br/>of all.</p>
      <p>Because none of this<br/>belongs to us.</p>
      <p>Not really.</p>
      <p>Not the rivers.</p>
      <p>Not the soil.</p>
      <p>Not the institutions.</p>
      <p>Not the freedoms<br/>people bled<br/>into the ground<br/>for us to inherit.</p>
      <p>Not even<br/>the future.</p>
      <p>We are temporary.</p>
      <p>We are standing<br/>inside a house<br/>built by dead people,</p>
      <p>holding keys<br/>that belong<br/>to children<br/>who have not<br/>been born yet.</p>
      <p>And look<br/>at what we are doing<br/>to their inheritance.</p>
      <p>Burning the furniture<br/>to heat one room.</p>
      <p>Eating the seed corn.</p>
      <p>Selling the roof<br/>for applause.</p>
      <p>Spending tomorrow<br/>like it is money<br/>we earned.</p>
      <p>When the next generation<br/>walks into this house,</p>
      <p>what will be left?</p>
      <p>A table?</p>
      <p>Or splinters?</p>
      <p>A garden?</p>
      <p>Or photographs<br/>of trees?</p>
      <p>A democracy?</p>
      <p>Or an exhibit<br/>explaining<br/>what one used to look like?</p>
      <p>Will they inherit<br/>a country?</p>
      <p>Or a crime scene?</p>
      <p>And maybe<br/>that is the lie<br/>we have to kill first—</p>
      <p>that service<br/>is weakness.</p>
      <p>That the person<br/>who bends down<br/>must be beneath<br/>the person<br/>who stands over them.</p>
      <p>That mercy<br/>means surrender.</p>
      <p>That compassion<br/>makes us fragile.</p>
      <p>That power<br/>has to leave bruises<br/>before we believe<br/>it is real.</p>
      <p>No.</p>
      <p>Maybe strength<br/>was never supposed<br/>to look like a fist.</p>
      <p>Maybe it was supposed<br/>to look like<br/>an open hand.</p>
      <p>Maybe courage<br/>is not<br/>how hard<br/>we can become.</p>
      <p>Maybe courage<br/>is how much<br/>of our humanity<br/>we can keep</p>
      <p>in a world<br/>that keeps offering us<br/>reasons<br/>to surrender it.</p>
      <p>Because that<br/>is what scares me.</p>
      <p>Not that cruelty exists.</p>
      <p>Cruelty<br/>has always existed.</p>
      <p>What scares me<br/>is how quickly<br/>we get used to it.</p>
      <p>How easily<br/>the unbearable<br/>becomes Tuesday.</p>
      <p>How something<br/>that once would have<br/>stopped our hearts</p>
      <p>becomes something<br/>we scroll past<br/>while waiting<br/>for the coffee<br/>to brew.</p>
      <p>A human being<br/>becomes a headline.</p>
      <p>Then a number.</p>
      <p>Then a statistic.</p>
      <p>Then an argument.</p>
      <p>Then nothing.</p>
      <p>But somewhere<br/>there is still<br/>a mother<br/>who knows<br/>that number's<br/>middle name.</p>
      <p>Somewhere<br/>there is a bedroom<br/>nobody has touched.</p>
      <p>A coat<br/>still hanging<br/>by the door.</p>
      <p>A phone number<br/>someone cannot bring<br/>themselves to delete.</p>
      <p>A birthday<br/>that still arrives<br/>every year</p>
      <p>even though<br/>the person<br/>doesn't.</p>
      <p>And we call it</p>
      <p>news.</p>
      <p>Policy.</p>
      <p>Collateral.</p>
      <p>The cost<br/>of doing business.</p>
      <p>Anything</p>
      <p>except</p>
      <p>somebody's life.</p>
      <p>That is how<br/>a country<br/>loses its soul.</p>
      <p>Not all at once.</p>
      <p>Piece by piece.</p>
      <p>Person by person.</p>
      <p>Every time<br/>we decide<br/>someone else's suffering<br/>is far enough away</p>
      <p>that we do not<br/>have to feel it.</p>
      <p>And our children<br/>are watching.</p>
      <p>They are watching<br/>what makes us angry.</p>
      <p>What makes us laugh.</p>
      <p>Whose pain<br/>we believe.</p>
      <p>Whose pain<br/>we explain away.</p>
      <p>Who we call<br/>our neighbor</p>
      <p>and who we call</p>
      <p>them.</p>
      <p>Someday<br/>they will inherit<br/>all of this.</p>
      <p>Not the speeches.</p>
      <p>Not the slogans.</p>
      <p>The consequences.</p>
      <p>The wounds<br/>we refused<br/>to close.</p>
      <p>The hatred<br/>we taught<br/>to speak fluently.</p>
      <p>The silences<br/>we handed down<br/>like family heirlooms.</p>
      <p>And one day</p>
      <p>one of them<br/>may ask us:</p>
      <p>Did you know?</p>
      <p>Did you know<br/>people were hurting?</p>
      <p>Did you know<br/>people were afraid?</p>
      <p>Did you know<br/>the house<br/>was burning?</p>
      <p>And what<br/>are we going<br/>to say?</p>
      <p>That we were busy?</p>
      <p>That it was complicated?</p>
      <p>That somebody else<br/>was supposed<br/>to fix it?</p>
      <p>That we thought<br/>the fire<br/>would stop<br/>at our door?</p>
      <p>I do not want<br/>to hand them<br/>a box of ashes</p>
      <p>and call it<br/>an inheritance.</p>
      <p>I want<br/>to be able<br/>to say:</p>
      <p>We heard them.</p>
      <p>Not enough<br/>at first.</p>
      <p>But eventually,</p>
      <p>we heard them.</p>
      <p>We opened the door.</p>
      <p>We moved the chair.</p>
      <p>We put our hands<br/>on the wound.</p>
      <p>We stayed<br/>when leaving<br/>would have been easier.</p>
      <p>We planted something<br/>knowing<br/>we might never<br/>see it bloom.</p>
      <p>We did not save<br/>everything.</p>
      <p>But when the world<br/>asked us<br/>to become cruel,</p>
      <p>we did not.</p>
      <p>When it asked us<br/>to look away,</p>
      <p>we looked closer.</p>
      <p>When it asked us<br/>to decide<br/>which human beings<br/>were worth loving,</p>
      <p>we refused<br/>the question.</p>
      <p>And when someone<br/>reached out<br/>from the dark,</p>
      <p>we reached back.</p>
      <p>Maybe<br/>that is where<br/>the revolution begins.</p>
      <p>Not with another crown.</p>
      <p>Not another throne.</p>
      <p>Not another<br/>great man<br/>promising<br/>to rescue us<br/>from one another.</p>
      <p>Maybe revolutions<br/>do not always<br/>sound like shouting.</p>
      <p>Maybe sometimes</p>
      <p>they sound<br/>like a door<br/>unlocking.</p>
      <p>A chair<br/>scraping<br/>across the floor.</p>
      <p>A shovel<br/>entering soil.</p>
      <p>A voice saying,</p>
      <p>I believe you.</p>
      <p>Another saying,</p>
      <p>Sit here.</p>
      <p>Another saying,</p>
      <p>I brought enough<br/>for both of us.</p>
      <p>Maybe that<br/>is how<br/>we find our way back.</p>
      <p>Not in one<br/>magnificent act<br/>of salvation,</p>
      <p>but in a million<br/>small refusals</p>
      <p>to abandon<br/>one another.</p>
      <p>Because leadership<br/>is not<br/>how loudly<br/>you can make the world<br/>say your name.</p>
      <p>Leadership<br/>is what happens<br/>to everyone else<br/>after you have spoken.</p>
      <p>Is the wound smaller?</p>
      <p>Is the circle wider?</p>
      <p>Can more people breathe?</p>
      <p>Is the garden alive?</p>
      <p>Did somebody<br/>who had given up<br/>begin to imagine<br/>tomorrow again?</p>
      <p>Will the children<br/>inherit something<br/>worth keeping?</p>
      <p>And if we cannot<br/>remember that now—</p>
      <p>if we cannot remember<br/>that leadership<br/>was supposed to mean</p>
      <p>service</p>
      <p>before it meant</p>
      <p>power—</p>
      <p>then one day<br/>our children<br/>will walk<br/>into the ruins<br/>of everything<br/>we swore<br/>we loved.</p>
      <p>They will step<br/>over the broken chairs.</p>
      <p>Touch the ashes<br/>of the garden.</p>
      <p>Look at the empty<br/>water glass.</p>
      <p>And ask us</p>
      <p>why.</p>
      <p>Why,</p>
      <p>when the body<br/>was still breathing,</p>
      <p>when there was still<br/>a pulse,</p>
      <p>when there was still time<br/>to put pressure<br/>on the wound,</p>
      <p>when there was still water<br/>to carry,</p>
      <p>when there were still<br/>chairs<br/>we could have pulled<br/>into the circle—</p>
      <p>why,</p>
      <p>when the house<br/>was burning,</p>
      <p>did we spend<br/>so much time</p>
      <p>deciding</p>
      <p>who deserved</p>
      <p>to be saved?</p>
        </div>
      </section>

      <figure class="blog-media blog-wide blog-closing-image">
        <img src="/images/uploads/empathy-detail.jpg" alt="A detailed view of the Empathy section inside Seeds of Service" loading="lazy" />
      </figure>

      <h2>Maybe That Is What a Seed Does</h2>

      <p>I keep thinking about the name.</p>

      <p><strong>Seeds of Service.</strong></p>

      <p>Seeds are small.</p>

      <p>You can hold one between two fingers.</p>

      <p>You can bury it in the ground and walk away with absolutely no visible proof that anything is happening.</p>

      <p>For a while, there is only dirt.</p>

      <p>You water it anyway.</p>

      <p>You protect it anyway.</p>

      <p>You trust that something may be happening underneath the surface even when you cannot see it yet.</p>

      <p>This project began that way.</p>

      <p>A connection.</p>

      <p>A conversation.</p>

      <p>An idea.</p>

      <p><em>You should meet.</em></p>

      <p><em>What if we tried this?</em></p>

      <p>And eventually, there was a museum.</p>

      <p>Saturday night there were people standing inside it.</p>

      <p>People reading. People creating. People listening. People adding leaves to a tree. People hearing poetry.</p>

      <p>And by Sunday morning, something else had grown too.</p>

      <p>A poem I did not know I was going to write.</p>

      <p>That may be the part of Seeds of Service that means the most to me.</p>

      <p>We can create exhibits about servant leadership. We can preserve stories. We can teach principles. We can put extraordinary people on walls.</p>

      <p>But the real goal was never simply to create something people would look at.</p>

      <p>It was to <strong>plant something.</strong></p>

      <p>A thought.</p>

      <p>A question.</p>

      <p>A conversation.</p>

      <p>A little discomfort.</p>

      <p>A little hope.</p>

      <p>Maybe even the beginning of somebody deciding that leadership does not have to mean being the most powerful person in the room.</p>

      <p>Maybe it can mean being the person willing to listen.</p>

      <p>The person willing to serve.</p>

      <p>The person willing to pull another chair into the circle.</p>

      <p class="blog-ending"><strong>And now that the doors are open, I cannot wait to see what grows next.</strong></p>

      <p>— Jen</p>

      <section class="visit-seeds-section blog-wide" aria-labelledby="visit-seeds-heading">
        <p class="visit-seeds-kicker">Come Be Part of What Grows Next</p>
        <h2 id="visit-seeds-heading">Come Experience Seeds of Service</h2>

        <p>Seeds of Service was created to be experienced, not simply read about. Come explore the pop-up at Southwest Creative Studio, spend time with the exhibits, add your own voice to the interactive pieces, and join us for the events and workshops continuing throughout the season.</p>

        <div class="visit-seeds-links">
          <a class="visit-seeds-button visit-seeds-button-primary" href="https://luma.com/seedsofservice" target="_blank" rel="noopener noreferrer">View the Seeds of Service Calendar</a>
          <a class="visit-seeds-button" href="https://www.southwestcreativestudio.com/" target="_blank" rel="noopener noreferrer">Explore Southwest Creative Studio</a>
          <a class="visit-seeds-button" href="https://dehfoundation.org/" target="_blank" rel="noopener noreferrer">Learn About the International Servant Leaders Museum</a>
        </div>

        <p class="visit-seeds-note">The calendar has current event times, registration details, and updates.</p>

        <div class="workshops-intro">
          <h3>Join Me for a Seeds of Service Workshop</h3>
          <p>I’ll be teaching five interactive workshops inspired by the servant leadership principles inside the museum. Each one is designed for a different community and offers its own way to connect, create, reflect, and practice leadership through service.</p>
        </div>

        <div class="workshop-list">
          <article class="workshop-card">
            <div class="workshop-date">
              <span class="workshop-month">SEP</span>
              <span class="workshop-day">19</span>
            </div>
            <div class="workshop-copy">
              <p class="workshop-audience">Bilingual · Moms &amp; Children · Listening</p>
              <h4>Listening With Ears, Eyes &amp; Heart</h4>
              <p>A playful, meaningful family workshop exploring the difference between simply hearing and truly listening. Families will practice ways to strengthen communication, connection, and the feeling of being genuinely heard.</p>
            </div>
          </article>

          <article class="workshop-card">
            <div class="workshop-date">
              <span class="workshop-month">SEP</span>
              <span class="workshop-day">26</span>
            </div>
            <div class="workshop-copy">
              <p class="workshop-audience">Teens &amp; Artists · Community &amp; Circle Orientation</p>
              <h4>Create the Circle: Art, Belonging &amp; Community</h4>
              <p>A creative workshop about belonging, contribution, and what becomes possible when different voices, talents, and perspectives work together instead of competing for space.</p>
            </div>
          </article>

          <article class="workshop-card">
            <div class="workshop-date">
              <span class="workshop-month">OCT</span>
              <span class="workshop-day">3</span>
            </div>
            <div class="workshop-copy">
              <p class="workshop-audience">Moms · Healing</p>
              <h4>You Don’t Have to Carry It All: Healing for Moms</h4>
              <p>A supportive space for moms to slow down, reflect on the visible and invisible weight they carry, and explore how compassion, connection, encouragement, and community can make the load feel a little lighter.</p>
            </div>
          </article>

          <article class="workshop-card">
            <div class="workshop-date">
              <span class="workshop-month">OCT</span>
              <span class="workshop-day">10</span>
            </div>
            <div class="workshop-copy">
              <p class="workshop-audience">Working Adults &amp; Peers · Empathy</p>
              <h4>Beyond the First Impression: Practicing Empathy at Work and in Life</h4>
              <p>An interactive look at how quickly assumptions form, what we may be missing beneath the surface, and how choosing curiosity over judgment can change our workplaces, relationships, and communities.</p>
            </div>
          </article>

          <article class="workshop-card">
            <div class="workshop-date">
              <span class="workshop-month">OCT</span>
              <span class="workshop-day">17</span>
            </div>
            <div class="workshop-copy">
              <p class="workshop-audience">Seniors · Stewardship &amp; Hopeful Vision</p>
              <h4>What We Leave Behind: Stewardship, Hope &amp; the Future</h4>
              <p>A reflective and uplifting workshop celebrating lived experience, the wisdom carried across generations, and the choices we make today to protect what matters for the people who come next.</p>
            </div>
          </article>
        </div>

        <div class="workshop-calendar-cta">
          <p><strong>Want to join us?</strong> Dates are listed above, and the Seeds of Service calendar has the latest times, details, and registration information.</p>
          <a class="visit-seeds-button visit-seeds-button-primary" href="https://luma.com/seedsofservice" target="_blank" rel="noopener noreferrer">See All Events &amp; Workshops</a>
        </div>
      </section>
    `
  },
  {
  slug: "inherited-weather-introduction",
  title: "Inherited Weather: Why I’m Finally Sharing My Story",
  date: "2026-03-17",
  excerpt: "This blog is where creativity, motherhood, growth, and real life collide. Here’s why I’m finally sharing my story.",
  featuredImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop",
  tags: ["Personal", "Creativity", "Motherhood", "Growth"],
  content: `
    <h1>Inherited Weather: Why I’m Finally Sharing My Story</h1>

    <p>I’ve started this blog a hundred times in my head.</p>

    <p>Different names. Different directions. Different versions of myself.</p>

    <p>But this one feels right.</p>

    <p>This space isn’t just about one thing. It’s about everything I carry, everything I’ve built, and everything I’m still becoming.</p>

    <h2>What “Inherited Weather” Means</h2>

    <p>The idea behind this blog comes from something I’ve been thinking about a lot lately: the things we inherit without choosing.</p>

    <p>The emotional patterns. The storms. The survival habits. The strength.</p>

    <p>Some of it protects us. Some of it holds us back.</p>

    <p>And at some point, especially when you become a parent, you realize… you get to decide what continues and what changes.</p>

    <blockquote style="border-left: 4px solid #14b8a6; padding-left: 1rem; margin: 1.5rem 0; font-style: italic; color: #4b5563;">
      "You may not control the weather you were given, but you can change the climate you create."
    </blockquote>

    <h2>Why I’m Starting This Now</h2>

    <p>I’m in a season of building.</p>

    <p>Building a career that blends creativity and purpose.  
    Building projects that actually mean something.  
    Building a life that feels aligned with who I really am.</p>

    <p>And honestly, I don’t have it all figured out. Not even close.</p>

    <p>But I’ve learned that waiting until everything is perfect usually means never starting at all.</p>

    <p>So this is me starting.</p>

    <h2>What You’ll Find Here</h2>

    <p>This blog is going to be a mix of everything I care about:</p>

    <ul>
      <li>Creative projects and behind the scenes of what I’m building</li>
      <li>Music, storytelling, and ideas that turn into something real</li>
      <li>Motherhood and the lessons that come with it</li>
      <li>Growth, healing, and figuring things out in real time</li>
      <li>Moments that feel small but actually matter the most</li>
    </ul>

    <p>Some posts will be practical. Some will be messy. Some will probably surprise me.</p>

    <h2>This Is Me Showing Up</h2>

    <p>If you’re here, thank you. Really.</p>

    <p>This isn’t about being perfect or polished. It’s about being honest, creative, and willing to share the process as it unfolds.</p>

    <p>If anything here resonates with you, I hope you stick around.</p>

    <p>We’re all navigating something. We’re all carrying something.</p>

    <p>And maybe, together, we can learn how to shape something better out of it.</p>

    <p>— Jen</p>
  `
},
  {
  slug: "breaking-patterns-personal-growth",
  title: "Breaking Patterns: The Moment You Realize You Can Choose Differently",
  date: "2026-04-02",
  excerpt: "There’s a moment in your personal growth journey when you realize you don’t have to repeat what you were given. This is what it looks like to choose differently.",
  featuredImage: "/images/uploads/Breaking.jpg",
  tags: ["Personal Growth", "Healing", "Motherhood", "Self Development"],
  content: `
    <p>There’s a moment in your life when something shifts.</p>

    <p>It’s not loud. It’s not dramatic. No one else may even notice it happening.</p>

    <p>But you feel it.</p>

    <p>It’s the moment you realize you don’t actually have to keep doing things the way they’ve always been done.</p>

    <h2>The Pattern You Didn’t Choose</h2>

    <p>So much of who we are is shaped before we even realize it.</p>

    <p>The way we react. The way we cope. The way we love. The way we protect ourselves.</p>

    <p>These patterns often come from what we experienced growing up. They’re inherited in quiet ways. Not just through what we were told, but through what we saw, what we felt, and what we had to figure out on our own.</p>

    <p>
      This is part of what I meant in my last post when I talked about 
      <a href="/blog/inherited-weather-why-im-finally-sharing-my-story">“Inherited Weather”</a>.
    </p>

    <p>Some of these patterns serve us. They helped us survive. They helped us adapt.</p>

    <p>But not all of them are meant to stay.</p>

    <h2>The Personal Growth Moment That Changes Everything</h2>

    <p>There comes a point in your personal growth journey where you start to notice your own patterns in real time.</p>

    <p>You catch yourself reacting the same way. Thinking the same thoughts. Falling into the same cycles.</p>

    <p>And for the first time, you pause.</p>

    <p>That pause is everything.</p>

    <p>Because in that space, you realize something powerful:</p>

    <p><strong>You have a choice.</strong></p>

    <p>You can continue the pattern. Or you can choose something different.</p>

    <h2>Choosing Differently Is Not Easy</h2>

    <p>Let’s be honest. Breaking patterns is uncomfortable.</p>

    <p>Choosing a new response feels unnatural at first. Sometimes it even feels wrong, because it’s unfamiliar.</p>

    <p>Growth and healing often feel like this.</p>

    <p>Not like a breakthrough moment, but like a quiet, internal decision that you have to keep making over and over again.</p>

    <p>Especially in motherhood, I’ve felt this more than ever.</p>

    <p>There are moments where I catch myself about to react in a way that was modeled for me. And I have to stop and ask myself:</p>

    <p><em>Is this what I want to pass on?</em></p>

    <h2>Becoming Who You Needed</h2>

    <p>A big part of healing and growth is becoming the person you needed at one point in your life.</p>

    <p>Not perfectly. Not all at once.</p>

    <p>But intentionally.</p>

    <p>It’s in the small moments:</p>

    <p>Choosing patience instead of frustration.<br/>
    Choosing honesty instead of avoidance.<br/>
    Choosing softness when it would be easier to shut down.</p>

    <p>These are the moments that slowly change your life direction.</p>

    <h2>This Is What Breaking the Cycle Looks Like</h2>

    <p>It’s not one big decision. It’s a series of small ones.</p>

    <p>It’s noticing.<br/>
    Pausing.<br/>
    Choosing differently.</p>

    <p>Again and again.</p>

    <p>This is how generational patterns shift.</p>

    <p>This is how the “weather” starts to change.</p>

    <h2>Still Figuring It Out</h2>

    <p>I’m not writing this from a place of having it all figured out.</p>

    <p>I’m in it. Every day.</p>

    <p>Some days I get it right. Some days I don’t.</p>

    <p>But I’m aware now. And that awareness alone has changed everything.</p>

    <p>If you’re in that space too, where you’re starting to notice, starting to question, starting to shift…</p>

    <p>You’re already doing more than you think.</p>

    <p>And that matters.</p>

    <p>— Jen</p>
  `
},
  {
  slug: "the-line-between-pushing-and-protecting",
  title: "The Line Between Pushing and Protecting",
  date: "2026-04-08",
  excerpt: "A real parenting moment about pushing vs protecting, breaking patterns, and learning how to support your child without repeating the past.",
  featuredImage: "/images/uploads/push-blog.jpg",
  tags: ["Motherhood", "Parenting", "Personal Growth", "Breaking Patterns"],
  content: `
    <h1>The Line Between Pushing and Protecting</h1>

    <p>There’s a moment in parenting that no one really prepares you for.  
    The moment where your role shifts from simply protecting your child… to guiding their growth.</p>

    <p>The moment where you have to decide  
    do I push…  
    or do I protect?</p>

    <p>And sometimes, the hardest part is realizing those two things can look almost identical in the moment.</p>

    <p>My daughter recently auditioned for her school talent show.</p>

    <p>She made it.</p>

    <p>She was excited. I was excited. It felt like one of those moments you want to bottle up and keep forever.</p>

    <p>So we practiced.</p>

    <p>The singing. The dancing. The timing.  
    We worked through it together.</p>

    <p>But the day before her first dress rehearsal, something shifted.</p>

    <p>She started rushing through everything.  
    Cutting corners. Skipping energy. Half doing it.</p>

    <p>Because she wanted to get back to her game.</p>

    <p>And I saw it immediately.</p>

    <p>So I told her the truth in that moment as a parent trying to balance support and accountability.</p>

    <p>I told her if she went into dress rehearsal like that, they could pull her act.</p>

    <p>And she broke.</p>

    <p>Tears. Anxiety. Shut down.</p>

    <p>And instantly, everything inside me questioned what I had just done.</p>

    <p>My son stepped in.</p>

    <p>He told me I was being too hard on her.</p>

    <p>And that hit me deeper than I expected.</p>

    <p>Because he wasn’t just reacting to <em>her moment</em>…  
    he was reacting to <em>his memory of me</em>.</p>

    <p>Later, my husband and my niece told me something completely different.</p>

    <p>That I did exactly what I was supposed to do.</p>

    <p>That I was preparing her.  
    Not tearing her down.</p>

    <p>And now I was sitting in the middle of two completely different reflections of myself.</p>

    <p>Too hard.  
    Or exactly right.</p>

    <p>And I cried.</p>

    <p>Because this is the part of parenting and personal growth that doesn’t get talked about enough.</p>

    <p>Not the highlight reel.  
    Not the proud moment on stage.</p>

    <p>But the quiet moments after, when you’re lying in bed wondering…</p>

    <p>Did I just help my child grow  
    or did I just pass something down that I’ve been trying to break?</p>

    <p>That question isn’t new for me.</p>

    <p>It’s part of a deeper pattern I’ve been learning to recognize as both a parent and a person working to break generational patterns.</p>

    <p>If you read my first post,  
    <strong><a href="/blog/inherited-weather-introduction">Inherited Weather: Why I’m Finally Sharing My Story</a></strong>,  
    this is exactly what I was talking about.</p>

    <p>The patterns we don’t always see until we’re in the middle of them.</p>

    <p>That night, I didn’t really sleep.</p>

    <p>I replayed everything.</p>

    <p>My tone. My words. Her face.</p>

    <p>All of it.</p>

    <p>The next day, her dad texted me after rehearsal.</p>

    <p>He said she told him everyone clapped so loud for her.</p>

    <p>That she had the biggest smile.</p>

    <p>And I just sat there for a second.</p>

    <p>Because that’s the part you don’t see coming.</p>

    <p>The part where growth and discomfort exist in the same space.</p>

    <p>Later, my son and I talked.</p>

    <p>Really talked.</p>

    <p>And we both realized something important.</p>

    <p>He was mixing his past experiences with mine… with hers.</p>

    <p>But they are not the same story.</p>

    <p>They are not the same child.</p>

    <p>And they do not need the same version of me.</p>

    <p>That realization brought me right back to something I wrote in my last post,  
    <strong><a href="/blog/breaking-patterns-personal-growth">Breaking Patterns: The Moment You Realize You Can Choose Differently</a></strong>.</p>

    <p>Because this is what that moment actually looks like in real life.</p>

    <p>Not calm.  
    Not clear.  
    Not perfectly handled.</p>

    <p>Just awareness… in the middle of it.</p>

    <p>And I realized something too about parenting and growth.</p>

    <p>I can still be right in my intention  
    and wrong in my delivery.</p>

    <p>Both things can be true at the same time.</p>

    <p>That’s the real work for me right now as a parent.</p>

    <p>Not just breaking patterns in what I say  
    but in how I say it.</p>

    <p>Not removing expectations  
    but learning how to hold them with care.</p>

    <p>Because I don’t want to raise kids who are afraid to try.</p>

    <p>But I also don’t want to raise kids who quit the moment something gets hard.</p>

    <p>And somewhere in between those two things…</p>

    <p>is the line I am still learning how to walk.</p>

    <p>This is what I mean by <em>Inherited Weather</em> and how generational patterns show up in parenting.</p>

    <p>But maybe growth isn’t about getting it perfect.</p>

    <p>Maybe it’s about being willing to reflect, repair, and do it differently next time.</p>

    <p>And maybe the win isn’t that I handled it perfectly.</p>

    <p>Maybe the win is that I questioned it at all.</p>

    <p>Because she got on that stage and shined.</p>

    <p>And I’m still learning how to stand beside that light  
    without dimming it  
    or pushing it too hard.</p>

    <p>— Jen</p>
  `
},
  {
  slug: "when-your-childs-reaction-triggers-your-past",
  title: "When Your Child’s Reaction Triggers Your Past",
  date: "2026-04-15",
  excerpt: "Two completely separate moments revealed the same truth. Sometimes it’s not about what we mean… it’s about how we’re felt.",
  featuredImage: "/images/uploads/reaction-blog.jpg",
  tags: ["Motherhood", "Parenting", "Personal Growth", "Healing"],
  content: `
    <h1>When Your Child’s Reaction Triggers Your Past</h1>

    <p>I’ve been sitting with something lately.</p>

    <p>Not one specific moment…  
    but two completely separate ones.</p>

    <p>And what’s bothering me is that even though they had nothing to do with each other…</p>

    <p>they showed me the exact same thing.</p>

    <p>The first was with my kids.</p>

    <p>The second was with my niece.</p>

    <p>Two different situations.  
    Two different conversations.  
    Two completely different contexts.</p>

    <p>But somehow…  
    they landed in almost the same way.</p>

    <p>That’s what I can’t stop thinking about.</p>

    <p>Because in both situations, I walked away feeling the same thing:</p>

    <p>Like what I meant to say…  
    and what people felt from me…</p>

    <p>were not the same.</p>

    <p>With my kids, it showed up one way.</p>

    <p>My daughter shut down.</p>

    <p>My son got upset with me.</p>

    <p>And later, when we talked, I realized something I didn’t fully understand before…</p>

    <p>They don’t just experience me in the moment.</p>

    <p>They experience me through everything that’s come before it.</p>

    <p>So even if I’m responding to what’s happening right now…</p>

    <p>they might be feeling something from before.</p>

    <p>That was hard to sit with.</p>

    <p>And then separately…  
    there was my niece.</p>

    <p>That situation had nothing to do with parenting.</p>

    <p>It was just a real life moment where someone I love was trying to share how they were feeling.</p>

    <p>And instead of just listening…</p>

    <p>I went straight into trying to fix it.</p>

    <p>Trying to make it make sense.  
    Trying to offer solutions.  
    Trying to help.</p>

    <p>But that’s not what she needed.</p>

    <p>And it didn’t land that way.</p>

    <p>It escalated.</p>

    <p>Feelings got hurt.</p>

    <p>And the worst part for me…</p>

    <p>was realizing she thought I was pushing her away.</p>

    <p>That part stuck with me the most.</p>

    <p>Because that was never what I meant.</p>

    <p>Not even close.</p>

    <p>And that’s when it clicked.</p>

    <p>Two completely different situations.</p>

    <p>But the same underlying issue.</p>

    <p>I wasn’t always communicating what I thought I was.</p>

    <p>I was trying to help.</p>

    <p>Trying to guide.</p>

    <p>Trying to support.</p>

    <p>But sometimes…</p>

    <p>it was being felt as pressure.</p>

    <p>Or dismissal.</p>

    <p>Or something else entirely.</p>

    <p>And that’s a hard thing to sit with.</p>

    <p>Because it forces you to ask a different question.</p>

    <p>Not just:</p>

    <p>Did I mean well?</p>

    <p>But:</p>

    <p>How did that actually feel to them?</p>

    <p>That’s a different level of awareness.</p>

    <p>And I think that’s where growth really starts.</p>

    <p>Not in being perfect.</p>

    <p>Not in never getting it wrong.</p>

    <p>But in being willing to look at the gap…</p>

    <p>between your intention  
    and your impact.</p>

    <p>That gap is uncomfortable.</p>

    <p>But it’s also where everything shifts.</p>

    <p>This connects so much to what I’ve been writing about in  
    <strong><a href="/blog/the-line-between-pushing-and-protecting">The Line Between Pushing and Protecting</a></strong>  
    and even back to  
    <strong><a href="/blog/inherited-weather-introduction">Inherited Weather</a></strong>.</p>

    <p>Because these things don’t just show up in one area of your life.</p>

    <p>They show up everywhere.</p>

    <p>In parenting.  
    In relationships.  
    In the way you respond when someone you love is struggling.</p>

    <p>The patterns are consistent…</p>

    <p>even when the situations aren’t.</p>

    <p>And I think that’s what I’m learning right now.</p>

    <p>It’s not about controlling every moment.</p>

    <p>It’s about paying attention to what those moments reveal.</p>

    <p>And being willing to adjust.</p>

    <p>Because the goal isn’t just to be understood.</p>

    <p>It’s to make the people in your life feel understood too.</p>

    <p>I’m still figuring that out.</p>

    <p>But I’m noticing it now.  
    And that feels like a start.</p>

    <p>Because at the end of the day…</p>

    <p>it’s not just about what we say.</p>

    <p>It’s about how we’re felt.</p>

    <p>— Jen</p>
  `
},
 {
  slug: "the-aftermath-of-letting-go",
  title: "The Aftermath of Letting Go",
  date: "2026-04-29",
  excerpt: "Releasing The Endless Powers Of Me, revisiting the past, and what it actually feels like to create your first album.",
  featuredImage: "/images/uploads/aftermath.jpg",
  tags: ["music", "writing", "healing", "personal"],
  content: `
    <p>Last Friday, I released <em>The Endless Powers Of Me</em>.</p>

    <p>And I don’t think I was ready for how quiet it would feel afterward.</p>

    <p><strong>Not externally.</strong> People listened. Some reached out. Some didn’t.</p>

    <p>That’s not the quiet I mean.</p>

    <p><strong>I mean the internal kind.</strong></p>

    <p>The kind that settles in after you finally say something you’ve been carrying for years.</p>

    <br/>

    <p>When I wrote <a href="https://jenniferkropke.com/blog/inherited-weather-introduction"><em>Inherited Weather</em></a>, I talked about how we don’t start from scratch.</p>

    <p>We inherit emotional climates. Patterns. Survival instincts that don’t always look like survival until much later.</p>

    <p><strong>This album is what happened when I stopped observing that… and stepped inside it.</strong></p>

    <br/>

    <p>Every song on this project came from a moment I had already lived through once.</p>

    <p>But writing them meant living through them again.</p>

    <p>Not in the same way. Not as the same version of me.</p>

    <p>But close enough.</p>

    <br/>

    <p>There were nights I sat with memories I had spent years reshaping just to make them easier to hold.</p>

    <p><strong>Moments where I had to ask myself:</strong></p>

    <ul>
      <li>Was it really that bad?</li>
      <li>Was I overreacting?</li>
      <li>Why did I stay?</li>
      <li>Why did I let that define me for so long?</li>
    </ul>

    <p>And then the harder one:</p>

    <p><strong>Why am I still carrying it?</strong></p>

    <br/>

    <p>In <a href="https://jenniferkropke.com/blog/breaking-patterns-personal-growth"><em>Part One</em></a>, I started to face that idea.</p>

    <p>Not perfectly. Not completely.</p>

    <p>But honestly.</p>

    <p>It was the beginning of realizing that just because something shaped me doesn’t mean it gets to keep deciding who I am.</p>

    <p><strong>But realization and action are not the same thing.</strong></p>

    <br/>

    <p>This didn’t just connect to those early realizations.</p>

    <p>It also connected to the moments where I started questioning how those patterns show up now.</p>

    <p>In parenting. In reactions. In the way I respond before I even think.</p>

    <p>Like I wrote in <a href="https://jenniferkropke.com/blog/the-line-between-pushing-and-protecting"><em>The Line Between Pushing and Protecting</em></a> and <a href="https://jenniferkropke.com/blog/when-your-childs-reaction-triggers-your-past"><em>When Your Child’s Reaction Triggers Your Past</em></a>…</p>

    <p><strong>the past doesn’t stay in the past unless you actually face it.</strong></p>

    <br/>

    <p>That’s what this album became.</p>

    <p><strong>Not closure.</strong></p>
    <p><strong>Not clean, finished healing.</strong></p>
    <p><strong>But confrontation.</strong></p>

    <br/>

    <p>Some songs pulled from places I hadn’t touched in years.</p>

    <p>Old versions of myself that felt embarrassing to revisit. Loud. Reactive. Desperate to be seen.</p>

    <p>Others came from quieter spaces.</p>

    <p>The kind that don’t look broken on the outside, but carry something heavy underneath.</p>

    <p>The kind that learned to smile, perform, adapt.</p>

    <p>The kind that kept everything moving so nothing had to be felt all the way through.</p>

    <br/>

    <p>There’s a strange tension in creating something like this.</p>

    <p><strong>Because on one hand, it’s art.</strong></p>

    <p>Structure. Melody. Production. Strategy.</p>

    <p><strong>But underneath all of that, it’s evidence.</strong></p>

    <ul>
      <li>Proof that something happened</li>
      <li>Proof that it stayed</li>
      <li>Proof that it shaped you</li>
    </ul>

    <br/>

    <p>And then you release it.</p>

    <p>You take something that lived inside of you for years and make it public.</p>

    <p><strong>Permanent. Searchable. Real.</strong></p>

    <br/>

    <p>That part is harder than I expected.</p>

    <p>Not because I regret it.</p>

    <p>But because there’s no taking it back.</p>

    <p>No softening it after the fact.</p>

    <p>No explaining it differently depending on who’s listening.</p>

    <br/>

    <p><strong>It just exists now.</strong></p>

    <p>Exactly as it is.</p>
    <p>Exactly as I was when I wrote it.</p>

    <br/>

    <p>And somehow, that’s where the shift happened.</p>

    <p>Not in writing the songs.</p>
    <p>Not even in releasing them.</p>

    <p><strong>But in realizing I didn’t need to protect those versions of me anymore.</strong></p>

    <br/>

    <p>For so long, I thought healing meant rewriting the story.</p>

    <p>Making it cleaner. Stronger. More inspiring.</p>

    <p><strong>But this album didn’t do that.</strong></p>

    <p>It let the story stay messy.</p>
    <p>Honest.</p>
    <p>Uncomfortable in places.</p>

    <br/>

    <p>And maybe that’s what <em>The Endless Powers Of Me</em> actually is.</p>

    <p><strong>Not a statement that I’ve overcome everything.</strong></p>

    <p>But proof that I can hold all of it at once.</p>

    <p>The past. The patterns. The versions of me I don’t fully recognize anymore.</p>

    <p>And still move forward.</p>

    <br/>

    <p><strong>Not fixed.</strong><br/>
    Not finished.<br/>
    But no longer hidden.</p>

    <br/>

    <p>And this is just the beginning of letting it out.</p>

    <p><strong>I’ll be releasing one song at a time from this first album over the next few months.</strong></p>

    <p>Slowly. Intentionally.</p>

    <p>Giving each piece the space it never had before.</p>

    <p><strong>Until the full album comes together in mid September.</strong></p>

    <br/>

    <p>If you’ve listened, thank you.</p>

    <p>If you haven’t yet, it’s out there now.</p>

    <p><strong>And so am I.</strong></p>
  `
},
{
  slug: "what-survival-mode-looks-like-when-youre-high-functioning",
  title: "What Survival Mode Looks Like When You’re High Functioning",
  date: "2026-05-07",
  excerpt: "Some people don’t fall apart loudly. They keep functioning. This is what survival mode can look like when you become too good at carrying everything quietly.",
  featuredImage: "/images/uploads/high-functioning-survival.png",
  tags: ["Personal Growth", "Healing", "Mental Health", "Self Awareness"],
  content: `
    <p>Some people fall apart loudly.</p>

    <p><strong>Others answer emails.</strong></p>

    <p>
      They go to work.<br/>
      They take care of their kids.<br/>
      They keep conversations going.<br/>
      They release projects.<br/>
      They make plans.<br/>
      They smile when people ask how they’re doing.
    </p>

    <p>
      And because everything still looks functional from the outside…
    </p>

    <p><strong>nobody realizes they’re in survival mode.</strong></p>

    <p>Sometimes not even them.</p>

    <br/><br/>

    <h2>The Version of Survival Nobody Talks About</h2>

    <p>
      I think a lot of people imagine survival mode as obvious collapse.
    </p>

    <p>
      Not getting out of bed.<br/>
      Everything visibly falling apart.<br/>
      Life becoming unmanageable in a way everyone can see.
    </p>

    <p>
      But there’s another version that hides itself much better.
    </p>

    <p><strong>The high functioning version.</strong></p>

    <p>
      The version where you become <em>more productive</em> under emotional pressure.
    </p>

    <p>
      You organize more.<br/>
      Work more.<br/>
      Focus harder.<br/>
      Keep moving.
    </p>

    <p>
      Because slowing down would mean sitting with feelings you’re not fully ready to face yet.
    </p>

    <p>
      And if you stay busy enough…
    </p>

    <p><strong>maybe you won’t have to.</strong></p>

    <br/><br/>

    <h2>Lately, I’ve Been Noticing It In Myself</h2>

    <p>
      Lately, I don’t think I’ve really known how to stop.
    </p>

    <p>
      Even when life gets emotionally heavy, I instinctively look for something to do.
    </p>

    <p>
      Something to fix.<br/>
      Something to plan.<br/>
      Something to organize.<br/>
      Something to create.
    </p>

    <p>
      I throw myself into music.<br/>
      Projects.<br/>
      Ideas.<br/>
      Problem solving.
    </p>

    <p>
      Not because I’m trying to avoid life intentionally.
    </p>

    <p>
      But because focusing on something tangible feels easier than sitting inside uncertainty.
    </p>

    <p>
      And honestly, I think part of this connects back to what I wrote in
      <a href="/blog/inherited-weather-introduction" style="color:#7c3aed; text-decoration:none; font-weight:600;">
        Inherited Weather
      </a>
      and
      <a href="/blog/breaking-patterns-personal-growth" style="color:#7c3aed; text-decoration:none; font-weight:600;">
        Breaking Patterns
      </a>.
    </p>

    <p>
      There have been family situations happening behind the scenes that affected me more deeply than I initially admitted to myself.
    </p>

    <p>
      The kind of stress that quietly follows you through the entire day.
    </p>

    <p>
      The kind where your chest feels heavy while you’re still responding to texts like everything is normal.
    </p>

    <p>
      The kind where you spend one night completely overwhelmed…
    </p>

    <p>
      then wake up the next morning already mentally moving to the next task because you don’t know what else to do with yourself.
    </p>

    <p>
      And honestly, I think that’s the part I’m finally starting to understand.
    </p>

    <p>
      I don’t always fall apart when life gets hard.
    </p>

    <p><strong>Sometimes I become more functional.</strong></p>

    <p>
      More focused.<br/>
      More productive.<br/>
      More needed.
    </p>

    <p>
      Because staying in motion feels safer than being still long enough to fully feel what’s underneath everything.
    </p>

    <br/><br/>

    <p style="text-align:center;">
      <strong><em>Functioning is not the same thing as peace.</em></strong>
    </p>

    <br/><br/>

    <h2>The Dangerous Thing About Being Capable</h2>

    <p>
      The problem with being capable is that people eventually stop checking if you’re okay.
    </p>

    <p>
      Not because they don’t care.
    </p>

    <p>
      But because you’ve unintentionally taught everyone that you’ll handle it.
    </p>

    <p><strong>That you always do.</strong></p>

    <p>
      So even when you’re emotionally overloaded, people still come to you needing answers, support, reassurance, stability.
    </p>

    <p>
      And most of the time, you still give it.
    </p>

    <p>
      Because survival mode doesn’t always look chaotic.
    </p>

    <p>
      Sometimes it looks responsible.
    </p>

    <p><strong>Sometimes it even looks successful.</strong></p>

    <p>
      That’s what makes it dangerous.
    </p>

    <br/><br/>

    <h2>Your Body Eventually Knows</h2>

    <p>
      The strange thing about high functioning survival mode is that mentally, you can convince yourself you’re fine for a long time.
    </p>

    <p>
      But eventually, your body starts responding to what your mind keeps trying to push past.
    </p>

    <p>
      The exhaustion.<br/>
      The tension.<br/>
      The overstimulation.<br/>
      The emotional reactivity.<br/>
      The inability to fully relax even when there’s finally time to.
    </p>

    <p>
      It starts showing up somewhere.
    </p>

    <p>
      And lately, I’ve realized how long I’ve been operating from that place without fully noticing it.
    </p>

    <p><strong>Not falling apart.</strong></p>

    <p>
      Just carrying too much for too long while continuing to function anyway.
    </p>

    <br/><br/>

    <h2>Functioning Is Not The Same Thing As Peace</h2>

    <p>
      I think that’s the realization I keep coming back to lately.
    </p>

    <p>
      Just because someone is functioning<br/>
      doesn’t mean they’re okay.
    </p>

    <p>
      Just because someone is productive<br/>
      doesn’t mean they’ve processed what they’re carrying.
    </p>

    <p>
      And I think high functioning people struggle to recognize when they need care too…
    </p>

    <p>
      because they’re so used to being the person everyone else leans on.
    </p>

    <p>
      So used to being dependable.<br/>
      Being strong.<br/>
      Being the one who figures it out.
    </p>

    <p>
      That eventually, slowing down starts to feel irresponsible.
    </p>

    <p>
      It’s something I’ve also touched on in
      <a href="/blog/the-aftermath-of-letting-go" style="color:#7c3aed; text-decoration:none; font-weight:600;">
        The Aftermath of Letting Go
      </a>
      — the idea that functioning externally doesn’t always mean things feel settled internally.
    </p>

    <br/><br/>

    <h2>Learning To Notice It</h2>

    <p>
      I’m still figuring this out in real time.
    </p>

    <p>
      Still learning the difference between resilience and emotional avoidance.
    </p>

    <p>
      Still learning that constantly functioning is not the same thing as actually feeling okay.
    </p>

    <p>
      And maybe that’s the shift for me right now.
    </p>

    <p>
      Not becoming someone who never struggles.
    </p>

    <p>
      But becoming someone who recognizes when survival mode starts disguising itself as stability.
    </p>

    <br/>

    <p style="text-align:center;">
      <strong><em>Because surviving quietly is still surviving.</em></strong>
    </p>

    <br/>

    <p>— Jen</p>
  `
},
  {
  slug: "writing-the-songs-changed-the-memory-too",
  title: "Writing the Songs Changed the Memory Too",
  date: "2026-05-14",
  excerpt: "Songwriting didn’t just help me express the past. It forced me to reinterpret it through completely different emotional lenses.",
  featuredImage: "/images/uploads/songwriting-memory.png",
  tags: ["Music", "Writing", "Healing", "Personal Growth"],
  content: `

<p>There’s something strange that happens when you turn your life into music.</p>

<p>At first, I thought songwriting was going to be about expression.</p>

<p>
A way to vent.<br/>
Process.<br/>
Release things I had been carrying for years.
</p>

<p>But somewhere in the middle of creating this album, I realized something I wasn’t prepared for:</p>

<p><strong>The songs weren’t just helping me tell the story differently.</strong></p>

<p><strong>They were making me see the story differently too.</strong></p>

<p>And honestly… that part has been harder than writing the music itself.</p>

<br/><br/>

<p>
When I first started this blog in
<a href="/blog/inherited-weather-introduction" style="color:#7c3aed; text-decoration:none; font-weight:600;">
  <em>Inherited Weather</em>
</a>,
I talked about emotional patterns. The things we inherit without choosing.
</p>

<p>
The survival instincts.<br/>
The coping mechanisms.<br/>
The emotional climates we grow up inside of before we even know how to name them.
</p>

<p>At the time, I think I understood those ideas intellectually.</p>

<p>But songwriting forced me to sit inside them emotionally.</p>

<p><strong>That’s different.</strong></p>

<p>Writing about something in a reflective way is one thing.</p>

<p>But writing lyrics?</p>

<p>Lyrics don’t let you hide behind explanation.</p>

<p>
They force you into specificity.<br/>
Into emotion.<br/>
Into memory.<br/>
Into perspective.
</p>

<p>And once I started writing from that place, I realized how many moments from my past I had simplified just to survive them.</p>

<br/><br/>

<p>Some memories I had turned into villains.</p>

<p>Others I had softened so much they barely resembled reality anymore.</p>

<p>Some I blamed myself for completely.</p>

<p>Others I avoided looking at altogether.</p>

<p>But songs are strange that way.</p>

<p>They don’t always follow the version of the story you’ve been repeating in your head for years.</p>

<p>Sometimes they pull something deeper out of you before you even understand what you’re saying.</p>

<p style="text-align:center;">
<strong>Oh.</strong>
</p>

<p>That wasn’t anger underneath that memory.</p>

<p>
It was abandonment.<br/>
Or grief.<br/>
Or shame.<br/>
Or fear.
</p>

<p>Sometimes even empathy.</p>

<p>And that part surprised me the most.</p>

<br/><br/>

<p>Because songwriting has forced me to look at people from my past through different lenses too.</p>

<p>Not just myself.</p>

<p>There were moments I wrote about where I suddenly saw how young everyone involved really was.</p>

<p>How emotionally unequipped people can be while still trying their best.</p>

<p>How pain passes itself down quietly.</p>

<p>How survival mode can make people love you in damaging ways without fully realizing it.</p>

<p>That doesn’t erase accountability.</p>

<p>But it changes the shape of the memory.</p>

<p>And I think that’s part of what I’ve been wrestling with throughout this entire process.</p>

<p>The realization that two things can exist at the same time:</p>

<blockquote style="border-left: 4px solid #7c3aed; padding-left: 1rem; margin: 1.5rem 0; font-style: italic; color: #4b5563;">
Someone can hurt you<br/>
and still be hurting themselves.
<br/><br/>
You can understand something<br/>
and still grieve it.
<br/><br/>
You can have empathy<br/>
without excusing the damage.
</blockquote>

<br/>

<p>
That tension shows up constantly in this album.
</p>

<p>
Especially after writing blogs like
<a href="/blog/breaking-patterns-personal-growth" style="color:#7c3aed; text-decoration:none; font-weight:600;">
  <em>Breaking Patterns</em>
</a>
and
<a href="/blog/what-survival-mode-looks-like-when-youre-high-functioning" style="color:#7c3aed; text-decoration:none; font-weight:600;">
  <em>What Survival Mode Looks Like When You’re High Functioning</em>
</a>.
</p>

<p>Because once you start recognizing your patterns, you start recognizing where they came from too.</p>

<p>And that’s uncomfortable.</p>

<p>Not because it gives you all the answers.</p>

<p>But because it removes some of the simplicity.</p>

<p>The “good guy vs bad guy” version of the story starts falling apart.</p>

<p>And what’s left is usually something more human.</p>

<p>
More complicated.<br/>
More painful.<br/>
But also more honest.
</p>

<br/><br/>

<h2>The Version of Healing I Didn’t Expect</h2>

<p>I think before this project, I believed healing meant reaching a point where the past no longer affected you emotionally.</p>

<p>Like eventually you become completely detached from it.</p>

<p>But that hasn’t been my experience at all.</p>

<p>If anything, creating this music has made me feel some things more deeply.</p>

<p>Not because I’m stuck there.</p>

<p>But because I’m finally looking at them without immediately trying to outrun them.</p>

<p>
Without turning them into productivity.<br/>
Without immediately trying to “move forward.”
</p>

<p>
That realization connects deeply to what I wrote recently in
<a href="/blog/the-aftermath-of-letting-go" style="color:#7c3aed; text-decoration:none; font-weight:600;">
  <em>The Aftermath of Letting Go</em>
</a>.
</p>

<p>Because releasing the songs was emotional.</p>

<p>But writing them?</p>

<p><strong>Writing them was confrontational.</strong></p>

<p>It forced me to sit across from versions of myself I had spent years trying to edit into something easier to explain.</p>

<br/><br/>

<h2>Maybe That’s What Art Really Does</h2>

<p>And maybe that’s the real reason art changes people while they’re creating it.</p>

<p>Not because it magically heals everything.</p>

<p>But because it forces honesty.</p>

<p><strong>Real honesty.</strong></p>

<p>The kind that exists before the polished version of the story takes over.</p>

<p style="text-align:center;">
<strong>
This hurt me.<br/>
This shaped me.<br/>
This confused me.<br/>
This stayed with me longer than I wanted it to.
</strong>
</p>

<p>And maybe most importantly:</p>

<p style="text-align:center;">
<strong><em>This wasn’t as simple as I once needed it to be.</em></strong>
</p>

<br/><br/>

<p>I don’t think songwriting gave me closure.</p>

<p>But it did give me perspective.</p>

<p style="text-align:center;">
<strong>And sometimes, that changes everything.</strong>
</p>

<br/>

<p>— Jen</p>

`
},
  {
  slug: "writing-still-here-songwriting-trauma-metaphor",
  title: "Writing Still Here: When Metaphor Says What Literal Words Cannot",
  date: "2026-05-21",
  excerpt: "Still Here began as a graphic poem written years ago about sexual assault. This is the story of translating that pain into something emotional, metaphorical, and human instead of literal.",
  featuredImage: "/images/uploads/still-here-blog.png",
  tags: ["Music", "Songwriting", "Healing", "Personal Growth"],
  content: `

<p>There’s something interesting I’ve started realizing about this album as I continue releasing pieces of it into the world.</p>

<p>A lot of these songs didn’t actually begin as songs.</p>

<p><strong>They began as poems.</strong></p>

<p>Some of them were written years ago. Some came from moments I never intended anyone else to see. And now, somehow, they’re turning into music.</p>

<p>That’s exactly what happened with <em>The Endless Powers Of Me</em>.</p>

<p>And now… it’s happening again with <em>Still Here</em>.</p>

<br/><br/>

<h2>This Song Felt Different Immediately</h2>

<p>But this song was different from the beginning.</p>

<p>Heavier.</p>

<p>Not just emotionally, but thematically.</p>

<p>Because the original poem behind <em>Still Here</em> was centered around sexual assault.</p>

<p>And unlike some of my other writing from that time in my life, it wasn’t subtle at all.</p>

<p style="text-align:center;">
<strong>
It was graphic.<br/>
Raw.<br/>
Angry.<br/>
Devastated.
</strong>
</p>

<p>It came from a younger version of me that didn’t really know how to process what had happened except to say it exactly as it felt.</p>

<p>No artistic distance.</p>

<p>No metaphor.</p>

<p>No softening.</p>

<p>Just pain trying to get out somewhere.</p>

<p>And revisiting that years later as an adult was… complicated.</p>

<br/><br/>

<h2>Why I Didn’t Want Literal Lyrics</h2>

<p>Because when I started turning these older pieces into songs, I realized pretty quickly that I didn’t want <em>Still Here</em> to become a literal retelling.</p>

<p>I didn’t want to create something graphic just for the sake of impact.</p>

<p>I didn’t want people listening to the song and only hearing the event itself.</p>

<br/>

<p style="text-align:center;">
<strong><em>I wanted them to feel the aftermath.</em></strong>
</p>

<br/>

<p>The confusion.</p>

<p>The numbness.</p>

<p>The disconnection from your own body afterward.</p>

<p>The way something can stay with you long after the moment itself is over.</p>

<p>Because honestly, I think that’s the part people understand the least about trauma sometimes.</p>

<p>Not just what happened.</p>

<p><strong>But what it does to you after.</strong></p>

<p>How it changes the way you move through the world.</p>

<p>How certain memories stop feeling linear.</p>

<p>How fear can become physical.</p>

<p>How silence can become part of your personality without you even realizing it.</p>

<br/><br/>

<h2>When Literal Language Stopped Working</h2>

<p>And the more I sat with the lyrics for <em>Still Here</em>, the more I realized that literal language actually wasn’t the best way to express those feelings.</p>

<p style="text-align:center;">
<strong>
Metaphor was.<br/><br/>
Atmosphere was.<br/><br/>
Emotion was.
</strong>
</p>

<p>I found myself thinking less about “telling the story” and more about questions like:</p>

<ul>
  <li>What does dissociation sound like?</li>
  <li>What does fear sound like?</li>
  <li>What does survival sound like when it isn’t loud or cinematic or inspirational?</li>
  <li>What does it feel like to continue existing after trust has been broken in a way that changes your relationship with yourself?</li>
</ul>

<p>Those questions shaped the song far more than the original poem ever did.</p>

<p>Because trauma rarely feels clean or chronological emotionally.</p>

<p>It feels fragmented.</p>

<p>Heavy in random moments.</p>

<p>Quiet when you expect yourself to be angry.</p>

<p>Loud when you want to feel normal.</p>

<p>And trying to capture that through songwriting forced me to think differently than I ever had before as a writer.</p>

<p>Not just emotionally.</p>

<p><strong>Artistically.</strong></p>

<br/><br/>

<h2>The Things Left Unsaid</h2>

<p>There were lines I rewrote over and over because they felt too direct.</p>

<p>Not because the truth was too ugly to say, but because I realized sometimes the emotional truth lands harder when you don’t explain every detail.</p>

<blockquote style="border-left: 4px solid #7c3aed; padding-left: 1rem; margin: 1.5rem 0; font-style: italic; color: #4b5563;">
Sometimes imagery says more.<br/><br/>
Sometimes restraint says more.<br/><br/>
Sometimes the thing left unsaid is the part people feel the deepest.
</blockquote>

<p>And honestly, I think that’s part of what changed me while writing this song.</p>

<p>It forced me to stop thinking about art as just expression.</p>

<p>And start thinking about it as translation.</p>

<br/><br/>

<h2>Emotional Translation</h2>

<p>Because the reality is, there are experiences in life that don’t fully fit inside literal language.</p>

<p>Especially experiences tied to shame, fear, violation, grief, or survival.</p>

<p>Sometimes the feeling itself is too layered.</p>

<p>Too disconnected.</p>

<p>Too overwhelming to describe directly.</p>

<p>So instead, you build emotional landscapes around it.</p>

<p>You use metaphor.</p>

<p>Sound.</p>

<p>Tension.</p>

<p>Space.</p>

<p>You let people enter the feeling instead of simply explaining the event.</p>

<p>And that became the heart of <em>Still Here</em>.</p>

<p style="text-align:center;">
<strong>
Not retelling.<br/><br/>
Not graphic storytelling.<br/><br/>
But emotional translation.
</strong>
</p>

<br/><br/>

<h2>Why The Title Matters</h2>

<p>Which honestly makes the title feel even more important to me now.</p>

<p>Because <em>Still Here</em> isn’t meant to sound triumphant.</p>

<p>It’s not a victory speech.</p>

<p>It’s quieter than that.</p>

<p>More exhausted in some ways.</p>

<p>More human.</p>

<blockquote style="border-left: 4px solid #7c3aed; padding-left: 1rem; margin: 1.5rem 0; font-style: italic; color: #4b5563;">
Sometimes survival doesn’t look powerful.<br/><br/>
Sometimes it just looks like waking up the next day.
</blockquote>

<p>Continuing forward.</p>

<p>Learning how to exist inside yourself again.</p>

<p>Learning how to reconnect to parts of yourself that felt disconnected for a long time.</p>

<p>And I think that’s what this song ultimately became.</p>

<p>Not a recreation of the worst moment.</p>

<p>But proof that the worst moment wasn’t the end of the story.</p>

<br/><br/>

<p style="text-align:center;">
<strong>
Because after everything…<br/><br/>
I’m still here.
</strong>
</p>

<br/>

<p>— Jen</p>

`
},
{
  slug: "the-risk-of-choosing-yourself",
  title: "The Risk Of Choosing Yourself",
  date: "2026-05-28",
  excerpt: "Sometimes the biggest risk is not failure. Sometimes the biggest risk is believing you deserve a life that actually feels like yours.",
  featuredImage: "/images/uploads/risk-of-choosing-yourself.png",
  tags: ["Personal Growth", "Healing", "Music", "Identity"],
  content: `

<p>A few days ago I came across a tweet that asked:</p>

<blockquote style="border-left: 4px solid #7c3aed; padding-left: 1rem; margin: 2rem 0; font-style: italic; color: #4b5563; line-height: 1.8;">
“Have you ever quit a job before having another one lined up? Was it worth it?”
</blockquote>

<p>I kept thinking about it because a few years ago, I did exactly that.</p>

<p>At the time, it probably looked reckless from the outside. Walking away from stability as an adult is not something people usually celebrate in real time. Especially when bills still exist, responsibilities still exist, and the job market feels increasingly impossible to navigate.</p>

<p>But there comes a point where staying starts costing more than leaving.</p>

<p>And I think deep down, I already knew that.</p>

<br/><br/>

<h2>When Survival Starts Looking Like Disappearing</h2>

<p>The hardest part was that the place I walked away from was not always painful to me. At one point, I genuinely loved it. I felt connected to the people there. I felt purposeful there. Which almost made it harder when things changed.</p>

<p>Because when something shifts slowly, you spend a long time wondering if maybe the problem is actually you.</p>

<p style="text-align:center;">
<strong>
You tell yourself to adjust.<br/><br/>
To be grateful.<br/><br/>
To stop being sensitive.<br/><br/>
To push through.
</strong>
</p>

<p>Meanwhile, your body starts reacting before your mind catches up.</p>

<p>I would sit in my car before work already emotionally exhausted. I stopped recognizing myself creatively. I stopped feeling inspired. Parts of me that used to feel alive started going quiet.</p>

<p>And maybe that was the scariest part.</p>

<p style="text-align:center;">
<strong>
Not the fear of failing.<br/><br/>
The fear of disappearing.
</strong>
</p>

<p>There is a line in <em>Still Here</em> that says:</p>

<blockquote style="border-left: 4px solid #7c3aed; padding-left: 1rem; margin: 2rem 0; font-style: italic; color: #4b5563; line-height: 1.8;">
“I learned how to disappear before I knew what leaving meant.”
</blockquote>

<p>When I wrote that lyric, I was writing about trauma. But the older I get, the more I realize survival mode can quietly follow you into every area of your life if you are not careful.</p>

<p>I think that is part of what I have been writing about throughout this entire blog series in different ways.</p>

<p>How inherited survival patterns quietly shape the way we move through adulthood. How easily we confuse endurance with safety. How difficult it can be to recognize when we are recreating emotional environments that feel familiar instead of healthy.</p>

<p>Breaking patterns sounds empowering when people say it out loud.</p>

<p>In reality, it is often uncomfortable, uncertain, and deeply lonely at first.</p>

<p style="text-align:center;">
<strong>
You learn how to stay.<br/><br/>
How to tolerate.<br/><br/>
How to emotionally detach from yourself in order to function.
</strong>
</p>

<blockquote style="border-left: 4px solid #7c3aed; padding-left: 1rem; margin: 2rem 0; font-style: italic; color: #4b5563; line-height: 1.8;">
“Stillness isn’t weakness.<br/><br/>
It’s survival wearing thin.”
</blockquote>

<p>I think that lyric explains more about that season of my life than I knew at the time.</p>

<br/><br/>

<h2>The In Between</h2>

<p>Because leaving did not immediately make me feel free.</p>

<p>Honestly, at first it made everything harder.</p>

<p>I bounced between jobs that looked better on paper but felt equally disconnected from who I was. I kept trying to force myself into environments that left no room for creativity, emotion, music, or honestly, joy.</p>

<p>Lately I have been thinking a lot about the difference between pushing yourself to grow and forcing yourself to survive environments that are actively disconnecting you from who you are.</p>

<p style="text-align:center;">
<strong>
There is a line between resilience and self abandonment.
</strong>
</p>

<p>And I think many of us cross it without realizing it because we were taught that exhaustion is what adulthood is supposed to feel like.</p>

<p>I remember sitting at one of those jobs scrolling Indeed during downtime, feeling completely defeated. The job market was awful. Every listing had hundreds of applicants. Most of the time applying started to feel less like hope and more like throwing pieces of yourself into a void.</p>

<p>Then I saw a position that caught my attention.</p>

<p>I almost did not apply because I genuinely did not think I would get it.</p>

<p style="text-align:center;">
<strong>
But something in me said:<br/><br/>
try anyway.
</strong>
</p>

<p>And somehow, that one decision changed the direction of my life.</p>

<p>Not because everything suddenly became perfect, but because for the first time in a long time, I found myself in an environment that allowed parts of me to come back alive again.</p>

<p style="text-align:center;">
<strong>
Creativity returned.<br/><br/>
Connection returned.<br/><br/>
Music returned.
</strong>
</p>

<p>Or maybe more truthfully:</p>

<p style="text-align:center; font-size: 1.3rem;">
<strong>
I returned.
</strong>
</p>

<br/><br/>

<h2>Returning To Yourself</h2>

<p>There is another lyric in <em>Still Here</em> that says:</p>

<blockquote style="border-left: 4px solid #7c3aed; padding-left: 1rem; margin: 2rem 0; font-style: italic; color: #4b5563; line-height: 1.8;">
“They didn’t end my story.<br/><br/>
They only marked the page.”
</blockquote>

<p>I think that is what choosing yourself really is.</p>

<p style="text-align:center;">
<strong>
Not becoming fearless.<br/><br/>
Not suddenly healing overnight.<br/><br/>
Not magically escaping every difficult thing you have ever lived through.
</strong>
</p>

<p>It is deciding your story is still worth continuing even after seasons that convinced you to disappear inside yourself.</p>

<p>For a long time I thought strength meant becoming untouchable. Unbreakable. Unaffected.</p>

<p>But now I think real strength might simply be refusing to abandon yourself.</p>

<p style="text-align:center;">
<strong>
Even quietly.<br/><br/>
Even imperfectly.<br/><br/>
Even while terrified.
</strong>
</p>

<p>When I wrote <em>The Endless Powers of Me</em>, one lyric became the center of everything for me:</p>

<blockquote style="border-left: 4px solid #7c3aed; padding-left: 1rem; margin: 2rem 0; font-style: italic; color: #4b5563; line-height: 1.8;">
“Maybe power isn’t lightning.<br/><br/>
Maybe it’s the choice to stay.”
</blockquote>

<p>I understand that line differently now.</p>

<p>Because sometimes staying does not mean remaining inside the environment that is hurting you.</p>

<p style="text-align:center;">
<strong>
Sometimes staying means staying connected to yourself.<br/><br/>
Your creativity.<br/><br/>
Your instincts.<br/><br/>
Your humanity.
</strong>
</p>

<p>Sometimes staying means refusing to go numb.</p>

<p>And looking back now, I think that is why leaving changed my life.</p>

<p>Not because leaving magically saved me.</p>

<p>But because it interrupted the slow process of disappearing.</p>

<p>It forced me into an uncertain season where I had to rebuild trust in myself from the ground up. A season where I had no idea where things were leading, only that I could not keep shrinking in order to survive.</p>

<p>And somewhere in the middle of all that uncertainty, I found pieces of myself waiting for me.</p>

<p style="text-align:center;">
<strong>
The artist.<br/><br/>
The writer.<br/><br/>
The musician.<br/><br/>
The dreamer.
</strong>
</p>

<p>The version of me that still believed life was supposed to feel meaningful instead of merely manageable.</p>

<br/><br/>

<h2>Still Here</h2>

<p>For years, I thought survival was the victory.</p>

<p>Now I think survival was simply the reason I was still here long enough to become myself.</p>

<blockquote style="border-left: 4px solid #7c3aed; padding-left: 1rem; margin: 2rem 0; font-style: italic; color: #4b5563; line-height: 1.8;">
“Every scar is restoration.<br/><br/>
Every breath defies the past.”
</blockquote>

<p>Maybe that is the real risk of choosing yourself.</p>

<p style="text-align:center;">
<strong>
Not that you will fail.<br/><br/>
But that you might actually find the life that was waiting for you on the other side of fear.
</strong>
</p>

<p>And maybe healing is not becoming someone entirely new.</p>

<p style="text-align:center;">
<strong>
Maybe it is finally allowing yourself to stop disappearing.<br/><br/>
To stop shrinking.<br/><br/>
To stop surviving your own life.
</strong>
</p>

<p>Maybe healing is simply this:</p>

<p style="text-align:center; font-size: 1.2rem; font-style: italic; margin-top: 2rem;">
returning to yourself slowly enough that your nervous system finally believes you are safe to exist there.
</p>

<blockquote style="border-left: 4px solid #7c3aed; padding-left: 1rem; margin: 3rem 0 1rem 0; font-style: italic; color: #4b5563; line-height: 1.8; font-size: 1.1rem;">
“Not healed.<br/><br/>
Not hopeless.<br/><br/>
Still here.”
</blockquote>

<p style="margin-top: 3rem;">— Jen</p>

`
},
  {
  slug: "before-anyone-believed-in-me",
  title: "Before Anyone Believed In Me",
  date: "2026-06-11",
  excerpt: "Most people see the moment something becomes visible. They don't see the years spent building it when nobody was watching.",
  featuredImage: "/images/uploads/before-anyone-believed-in-me.jpg",
  tags: ["Personal Growth", "Creativity", "Music", "Life Lessons", "Self Development"],
  content: `

<p>Lately I've been thinking a lot about timing.</p>

<p>Not because anything major happened this week.</p>

<p>But because it feels like I'm standing in a season of my life where a lot of things are finally becoming visible.</p>

<p>The music.</p>

<p>The degree.</p>

<p>The creative projects.</p>

<p>The opportunities that seem to be showing up all at once.</p>

<p>And every time someone says something encouraging, I find myself thinking the same thing:</p>

<blockquote style="border-left: 4px solid #7c3aed; padding-left: 1rem; margin: 2rem 0; font-style: italic; color: #4b5563;">
Most of this started long before anyone believed in me.
</blockquote>

<h2>The Parts Nobody Sees</h2>

<p>I started dancing when I was three years old.</p>

<p>For most of my childhood and young adulthood, dance was where I felt most like myself.</p>

<p>Competitions.</p>

<p>Rehearsals.</p>

<p>Classes.</p>

<p>Performances.</p>

<p>Hours and hours spent working toward something that often existed only inside my own head.</p>

<p>People saw the performance.</p>

<p>They didn't see the practice.</p>

<p>And honestly, I've realized that pattern has followed me through most of my life.</p>

<p>People see the finished thing.</p>

<p>The visible thing.</p>

<p>The successful thing.</p>

<p>But they rarely see the years before it.</p>

<h2>The Years In Between</h2>

<p>Life didn't unfold the way I imagined it would.</p>

<p>I became a mom young.</p>

<p>I put school on hold.</p>

<p>I worked jobs that paid the bills but left parts of me feeling disconnected from who I was.</p>

<p>There were seasons where creativity became something I squeezed into whatever time was left over.</p>

<p>Sometimes that meant writing after everyone went to bed.</p>

<p>Sometimes it meant singing in the car.</p>

<p>Sometimes it meant carrying dreams that had nowhere to go yet.</p>

<p>And if I'm being honest, there were years where I wasn't sure any of it would matter.</p>

<p>Not because I stopped wanting it.</p>

<p>But because life gets loud.</p>

<p>Responsibilities get heavy.</p>

<p>And eventually you start wondering if maybe that version of yourself belonged to another chapter.</p>

<p>Looking back now, some of those years were probably closer to what I described in <a href="/blog/what-survival-mode-looks-like-when-youre-high-functioning">What Survival Mode Looks Like When You're High Functioning</a> than I realized at the time.</p>

<p>I was functioning.</p>

<p>Working.</p>

<p>Parenting.</p>

<p>Checking boxes.</p>

<p>But there were parts of myself quietly waiting for space to come back to life.</p>

<p style="text-align:center;">
<strong>
The dancer.<br/><br/>
The artist.<br/><br/>
The songwriter.<br/><br/>
The dreamer.
</strong>
</p>

<h2>The Quiet Work</h2>

<p>I think one of the hardest things about pursuing anything creative is how much of it happens in private.</p>

<p>Nobody sees the songs you never release.</p>

<p>Nobody sees the ideas that don't work.</p>

<p>Nobody sees the applications, auditions, projects, or plans that quietly fall apart.</p>

<p>And nobody really celebrates persistence while you're still in the middle of it.</p>

<p>People celebrate outcomes.</p>

<p>Not attempts.</p>

<p>Not effort.</p>

<p>Not the version of you that keeps showing up when there is absolutely no proof it's leading anywhere.</p>

<p>Most people hear a finished song and assume that's where the story begins.</p>

<p>But as I talked about in <a href="/blog/writing-still-here-songwriting-trauma-metaphor">Writing Still Here</a>, the finished version is often years removed from where the story actually started.</p>

<p>Long before the release.</p>

<p>Long before the recording.</p>

<p>Long before anyone else even knew it existed.</p>

<p>Looking back now, I think those years mattered more than anything that's happened recently.</p>

<p>Because that's where belief was built.</p>

<p>Not from success.</p>

<p>From repetition.</p>

<p>From continuing anyway.</p>

<h2>Before The Proof</h2>

<p>I graduated college a few weeks ago.</p>

<p>Magna Cum Laude.</p>

<p>At 36 years old.</p>

<p>And while that moment meant a lot to me, it wasn't really about the diploma.</p>

<p>It was about every version of me that kept going long before there was any guarantee I'd ever finish.</p>

<p>The same thing is true with music.</p>

<p>The same thing is true with every creative opportunity that has shown up recently.</p>

<p>None of it happened overnight.</p>

<p>And honestly, I don't think I could have appreciated this season without some of the harder ones that came before it.</p>

<p>Including the seasons where I had to make difficult choices about what kind of life I wanted to build.</p>

<p>The choices I wrote about in <a href="/blog/the-risk-of-choosing-yourself">The Risk Of Choosing Yourself</a>.</p>

<p>The moments where staying comfortable would have been easier than trusting myself.</p>

<p>The moments where there was no guarantee things would work out.</p>

<p>Only a feeling that I couldn't keep shrinking.</p>

<blockquote style="border-left: 4px solid #7c3aed; padding-left: 1rem; margin: 2rem 0; font-style: italic; color: #4b5563;">
Most success stories begin long before anyone notices them.
</blockquote>

<h2>Still Becoming</h2>

<p>I don't think this is a story about finally making it.</p>

<p>Honestly, I don't even know what "making it" means anymore.</p>

<p>What I do know is this:</p>

<p>The older I get, the more grateful I am for the versions of myself that kept showing up before there was evidence.</p>

<p>Before there was validation.</p>

<p>Before there was proof.</p>

<p>Before anyone believed in me.</p>

<p>Because the truth is, those versions of me carried everything that exists today.</p>

<p>And maybe that's what belief really is.</p>

<p>Not confidence.</p>

<p>Not certainty.</p>

<p>Just continuing to build something while nobody is watching.</p>

<p>Trusting that one day the invisible work will become visible.</p>

<p>And understanding that even if it doesn't...</p>

<p>The work was still worth doing.</p>

<p style="text-align:center;">
<strong><em>
Because some dreams begin long before anyone else can see them.
</em></strong>
</p>

<p>— Jen</p>

`
},
  {
  slug: "the-other-side-of-creativity",
  title: "The Other Side of Creativity",
  date: "2026-06-19",
  excerpt: "Most people know me as a dancer, musician, or mom. But some of my favorite creative work happens behind the scenes through marketing, design, storytelling, and helping organizations grow.",
  featuredImage: "/images/uploads/other-side-creativity.png",
  tags: ["Creativity", "Marketing", "Design", "Music", "Personal Growth"],
  content: `

<h1>The Other Side of Creativity</h1>

<p>When people think of me, they usually think dance.</p>

<p>Or music.</p>

<p>Or being a mom.</p>

<p>Those are probably the three things I talk about most often, so it makes sense.</p>

<p>They're also three of the most important parts of who I am.</p>

<p>But lately I've been realizing there's another side of my creativity that most people never really see.</p>

<p>The side sitting behind a computer screen.</p>

<p>The side designing graphics.</p>

<p>Building websites.</p>

<p>Writing content.</p>

<p>Planning social media strategies.</p>

<p>Helping organizations tell their stories.</p>

<p>And honestly?</p>

<p>I love that side just as much.</p>

<br/><br/>

<h2>It Took Me Longer To See It As Creativity</h2>

<p>For years, I viewed these parts of my life as completely separate.</p>

<p>Dance was creativity.</p>

<p>Music was creativity.</p>

<p>Writing was creativity.</p>

<p>Marketing and design were simply skills.</p>

<p>Useful skills.</p>

<p>Valuable skills.</p>

<p>But not creative in the same way.</p>

<p>At least that's what I told myself.</p>

<p>Then one day I realized I was using the exact same muscles.</p>

<p>The same storytelling instincts.</p>

<p>The same desire to connect with people.</p>

<p>The same drive to create something meaningful.</p>

<blockquote style="border-left: 4px solid #7c3aed; padding-left: 1rem; margin: 2rem 0; font-style: italic; color: #4b5563;">
The medium changed.<br/><br/>
The mission didn't.
</blockquote>

<p>Whether I'm writing a song, building a website, creating a graphic, or planning a social media campaign, I'm ultimately doing the same thing.</p>

<p>Trying to tell a story.</p>

<p>Trying to create a connection.</p>

<p>Trying to make someone feel something.</p>

<br/><br/>

<h2>It All Comes Back To Storytelling</h2>

<p>The older I get, the more I realize that creativity doesn't belong to a single category.</p>

<p>It's not limited to stages.</p>

<p>Or recording studios.</p>

<p>Or notebooks filled with lyrics.</p>

<p>Creativity shows up anywhere we're trying to build something meaningful.</p>

<p>That's something I've been writing about throughout this blog for months now.</p>

<p>Whether I was reflecting on <a href="/blog/before-anyone-believed-in-me" style="color:#7c3aed; text-decoration:none; font-weight:600;">Before Anyone Believed In Me</a> or sharing what I learned in <a href="/blog/the-risk-of-choosing-yourself" style="color:#7c3aed; text-decoration:none; font-weight:600;">The Risk Of Choosing Yourself</a>, the common thread has always been creativity.</p>

<p>Not just artistic creativity.</p>

<p>The creativity required to build a life.</p>

<p>The creativity required to reinvent yourself.</p>

<p>The creativity required to take everything you've learned and apply it somewhere new.</p>

<br/><br/>

<p style="text-align:center;">
<strong>
Storytelling.<br/><br/>
Connection.<br/><br/>
Creativity.
</strong>
</p>

<p style="text-align:center;">
Those three things seem to follow me no matter what project I'm working on.
</p>

<br/><br/>

<h2>Using Creativity In My Day Job</h2>

<p>One of the places where I get to use these skills every day is at Wesley Child Care Center.</p>

<p>While my role officially falls under administration, creativity somehow finds its way into almost everything I do.</p>

<p>One day I might be working on enrollment paperwork.</p>

<p>The next day I'm writing website content.</p>

<p>Designing flyers.</p>

<p>Creating brochures.</p>

<p>Building social media posts.</p>

<p>Writing blogs.</p>

<p>Or helping communicate important information to hundreds of families.</p>

<p>What I've learned is that communication matters.</p>

<p>A lot.</p>

<p>A website isn't just a website.</p>

<p>For a parent searching for childcare, it might be their first impression.</p>

<p>A blog isn't just a blog.</p>

<p>It might be the reason a family decides to learn more.</p>

<p>A social media post isn't just content.</p>

<p>It's an opportunity to tell a story.</p>

<p>And I genuinely love being part of that process.</p>

<br/><br/>

<h2>Helping Organizations Grow</h2>

<p>Over the years, I've realized I enjoy helping organizations find their voice just as much as I enjoy finding my own.</p>

<p>Every organization has a story.</p>

<p>Every brand has a personality.</p>

<p>The challenge is figuring out how to communicate it in a way that feels authentic.</p>

<p>That's where design, strategy, storytelling, and creativity all come together.</p>

<p>And honestly, I find that process fascinating.</p>

<br/><br/>

<h2>Working With Barry Edwards Productions</h2>

<p>One of the projects I've been especially excited about recently is working with Barry Edwards Productions.</p>

<p>Barry has decades of experience in broadcasting and entertainment.</p>

<p>There are incredible stories behind that history.</p>

<p>Relationships.</p>

<p>Experiences.</p>

<p>Moments that deserve to be shared.</p>

<p>Part of my role is helping bring those stories into today's digital world.</p>

<p>Creating content.</p>

<p>Designing promotional materials.</p>

<p>Building consistency across platforms.</p>

<p>Helping people understand not just who Barry is, but what Barry Edwards Productions represents.</p>

<p>It's storytelling.</p>

<p>Just through a different medium.</p>

<br/><br/>

<h2>The ADP Kids Show</h2>

<p>The ADP Kids Show has been especially fun because it combines both sides of my creative world.</p>

<p>On one side, I'm performing.</p>

<p>Dancing.</p>

<p>Hosting.</p>

<p>Being part of the show itself.</p>

<p>But behind the scenes, I'm also helping build the brand.</p>

<p>Creating graphics.</p>

<p>Planning content.</p>

<p>Developing social media strategies.</p>

<p>Thinking about audience growth.</p>

<p>Helping families discover something we're excited to create.</p>

<p>People often see the performance.</p>

<p>What they don't see are the hours spent planning, designing, organizing, creating, and problem-solving before anyone ever presses play.</p>

<p>And honestly?</p>

<p>I love that part too.</p>

<blockquote style="border-left: 4px solid #7c3aed; padding-left: 1rem; margin: 2rem 0; font-style: italic; color: #4b5563;">
For years I thought creativity only counted if it happened on a stage.<br/><br/>
Now I realize some of my most meaningful creative work happens behind a screen.
</blockquote>

<br/><br/>

<h2>The Common Thread</h2>

<p>Earlier this year, while releasing music and sharing the stories behind songs like <a href="/blog/writing-still-here-songwriting-trauma-metaphor" style="color:#7c3aed; text-decoration:none; font-weight:600;">Still Here</a>, I spent a lot of time thinking about creativity.</p>

<p>About where it comes from.</p>

<p>About why some people feel called to create in the first place.</p>

<p>And I've realized something important.</p>

<p>None of these things are separate chapters.</p>

<p>They're all connected.</p>

<p>The music.</p>

<p>The dance.</p>

<p>The writing.</p>

<p>The design work.</p>

<p>The marketing.</p>

<p>The websites.</p>

<p>The social media campaigns.</p>

<p>They're all different expressions of the same thing.</p>

<p style="text-align:center;">
<strong>
Whether it's a song.<br/><br/>
A website.<br/><br/>
A social media campaign.<br/><br/>
A graphic.<br/><br/>
Or a story.<br/><br/>

I'm still doing the same thing I've always done:
creating connection.
</strong>
</p>

<p>And while dance, music, and motherhood will always be important parts of who I am, I'm grateful for this side of my creativity too.</p>

<p>Because some of my favorite work happens behind the scenes.</p>

<p>In the places most people never see.</p>

<p>And that's a story worth telling too.</p>

<hr style="margin: 3rem 0;" />

<p><strong>Continue Reading:</strong></p>

<ul>
<li><a href="/blog/before-anyone-believed-in-me">Before Anyone Believed In Me</a></li>
<li><a href="/blog/the-risk-of-choosing-yourself">The Risk Of Choosing Yourself</a></li>
<li><a href="/blog/writing-still-here-songwriting-trauma-metaphor">Writing Still Here: When Metaphor Says What Literal Words Cannot</a></li>
<li><a href="/about">About Me</a></li>
<li><a href="/music">Music</a></li>
<li><a href="/contact">Contact</a></li>
</ul>

<p>— Jen</p>

`
},
  {
  slug: "the-story-behind-my-shame",
  title: "The Story Behind My Shame",
  date: "2026-07-1",
  excerpt: "I wrote My Shame in 2007 when I was 17 years old. Nearly twenty years later, I'm finally releasing it exactly as it was written.",
  featuredImage: "/images/uploads/my-shame-blog.png",
  tags: ["Music", "Songwriting", "Behind the Song", "Personal Growth"],
  content: `

<h1>The Story Behind <em>My Shame</em></h1>

<p>Some songs are written in a day.</p>

<p>Some sit on your computer for years.</p>

<p><strong>Mine sat for almost twenty.</strong></p>

<p>On <strong>July 24</strong>, I'll finally be releasing <em>My Shame</em>.</p>

<p>The funny thing is, this isn't a new song.</p>

<p>I wrote it in 2007.</p>

<p>So if you hear a little bit of that early 2000s emo influence... that's why. 😂</p>

<p>I could have rewritten it.</p>

<p>Changed the melody.</p>

<p>Updated the lyrics.</p>

<p>Tried to make it sound like something I wrote at 36 instead of 17.</p>

<p>But then it wouldn't really be <em>My Shame</em> anymore.</p>

<p>It would be a different song.</p>

<p>And this one deserves to exist exactly the way 17 year old me wrote it.</p>

<br/>

<h2>The Story Behind The Song</h2>

<p>Back then, I was in an on again off again relationship with my first boyfriend.</p>

<p>He was my first love.</p>

<p>My first serious relationship.</p>

<p>My first sexual partner.</p>

<p>Basically... my first everything.</p>

<p>Looking back now, I can see how unhealthy that relationship really was.</p>

<p>We both had tempers.</p>

<p>Neither of us knew what a healthy relationship looked like, so we accepted a lot of things that we never should have.</p>

<p>At the time though?</p>

<p><strong>I thought that was just what relationships looked like.</strong></p>

<br/>

<p>One day we were broken up, and I was a mess.</p>

<p>I skipped dance practice.</p>

<p>I was captain of my high school dance team, and the girls knew I wasn't doing well.</p>

<p>So they decided to surprise me.</p>

<p>They showed up at my parents' house with some of my favorite snacks to cheer me up.</p>

<p>Only...</p>

<p style="text-align:center;"><strong>I wasn't home.</strong></p>

<p style="text-align:center;"><strong>I was down the block.</strong></p>

<p style="text-align:center;"><strong>At his house.</strong></p>

<p>Needless to say... they weren't exactly thrilled.</p>

<p>At 17, I remember feeling embarrassed.</p>

<p>Not because I was with him.</p>

<p>Because I knew what they were thinking.</p>

<p>They had shown up to help me move forward, and there I was... right back where I started.</p>

<p>That feeling stayed with me.</p>

<p>Long enough that I wrote a song about it.</p>

<p><strong>That's where the title <em>My Shame</em> came from.</strong></p>

<br/>

<h2>Listening Through Adult Ears</h2>

<p>When I listen to the song today, I don't hear shame anymore.</p>

<p>I hear a 17 year old girl who thought she had to keep going back because she didn't know there was another option.</p>

<p>I think a lot of us have been there.</p>

<p>Maybe not in the exact same situation.</p>

<p>But we've all stayed somewhere longer than we should have.</p>

<p>We've all ignored people who were trying to help us.</p>

<p>We've all looked back at an older version of ourselves and thought...</p>

<blockquote style="border-left: 4px solid #7c3aed; padding-left: 1rem; margin: 2rem 0; font-style: italic; color: #4b5563;">
I wish I knew then what I know now.
</blockquote>

<p>As I've gotten older, I've realized how much our past shapes the choices we make before we even realize it.</p>

<p>I've written about that a lot here on the blog, especially in <a href="/blog/inherited-weather-introduction" style="color:#7c3aed; text-decoration:none; font-weight:600;"><em>Inherited Weather</em></a> and <a href="/blog/breaking-patterns-personal-growth" style="color:#7c3aed; text-decoration:none; font-weight:600;"><em>Breaking Patterns</em></a>.</p>

<p>At 17, I didn't have that perspective yet.</p>

<p>I just knew how I felt.</p>

<p>So I wrote a song.</p>

<br/>

<h2>Why I Never Changed It</h2>

<p>One of the reasons I wanted to release this song exactly as I wrote it is because it reminds me how much I've grown.</p>

<p>It's honest.</p>

<p>It's imperfect.</p>

<p>It's emotional.</p>

<p>And it's a snapshot of exactly who I was in 2007.</p>

<p>That same idea has come up a lot while writing this album.</p>

<p>In <a href="/blog/writing-the-songs-changed-the-memory-too" style="color:#7c3aed; text-decoration:none; font-weight:600;"><em>Writing the Songs Changed the Memory Too</em></a>, I talked about how revisiting old songs didn't just bring back memories. It actually changed the way I understood them.</p>

<p><strong><em>My Shame</em> is part of that journey.</strong></p>

<p>It's not a song about who I am today.</p>

<p>It's a song about who I was.</p>

<p>And I think there's something really beautiful about letting that version of me finally have her voice heard.</p>

<br/>

<p style="text-align:center;">
<strong>
Sometimes we outgrow the pain.<br/><br/>
But the story is still worth telling.
</strong>
</p>

<br/>

<p>I can't wait to finally share <em>My Shame</em> with you on <strong>July 24</strong>.</p>

<p>I hope when you hear it, you don't just hear the heartbreak.</p>

<p>I hope you hear the growth too.</p>

<p>— Jen</p>

`
},
  {
  slug: "choosing-my-kids-over-the-algorithm",
  title: "Choosing My Kids Over the Algorithm: A Working Mom's Battle With Mom Guilt",
  date: "2026-07-13",
  excerpt: "After realizing I was spending every evening creating content instead of making memories with my children, I chose one exhausting Saturday over a summer full of regret. This is what work-life balance really looked like for me.",
  featuredImage: "/images/uploads/choosing-my-kids-over-the-algorithm.png",
  tags: [
    "Motherhood",
    "Working Mom",
    "Mom Guilt",
    "Work Life Balance",
    "Parenting",
    "Personal Growth",
    "Creativity",
    "Family"
  ],
  content: `
<h1>Choosing My Kids Over the Algorithm</h1>

<p>Lately, I've felt like I'm failing at everything.</p>

<p>Not because I'm not trying. If anything, I'm trying too hard.</p>

<p>By the time I get home from work, I switch into <strong>mom mode</strong>.</p>

<p>Dinner. Laundry. Camp stories. Lost shoes. Hugs. Questions. Then...</p>

<p>I open my laptop.</p>

<p>For the next two or three hours, I'm editing videos, writing captions, scheduling posts, answering messages, researching ideas, creating graphics, and trying to stay ahead of an algorithm that never sleeps.</p>

<p>On paper, I'm sitting on the couch with my kids.</p>

<p>In reality... I'm somewhere else.</p>

<blockquote style="border-left:4px solid #7c3aed;padding-left:1rem;margin:2rem 0;font-style:italic;color:#4b5563;">
I wasn't choosing work over my kids.<br/><br/>
I was choosing work during the hours my kids were choosing me.
</blockquote>

<h2>Wearing Too Many Hats</h2>

<p>As working moms, we wear so many hats that sometimes we don't even realize which one we're wearing anymore.</p>

<ul>
<li>Employee</li>
<li>Mom</li>
<li>Content Creator</li>
<li>Marketer</li>
<li>Problem Solver</li>
<li>Friend</li>
<li>Daughter</li>
</ul>

<p>Somewhere along the way, the most important job started getting squeezed into whatever time was left over.</p>

<p>The mom guilt has been loud lately.</p>

<p>Summer only lasts so long.</p>

<p>My daughter is six exactly once.</p>

<p>My son is seventeen. The moments when he wanders upstairs to spend time with me are becoming fewer and farther between.</p>

<p>I don't want to miss either of them because I was making another Reel.</p>

<h2>One Very Long Saturday</h2>

<p>So this weekend, I made a decision.</p>

<p>I spent almost the entire day Saturday at my computer.</p>

<p>From around <strong>3:00 PM until nearly 2:00 AM</strong>, I worked.</p>

<p>Video after video.</p>
<p>Caption after caption.</p>
<p>Hashtag after hashtag.</p>

<p>By the time I finally shut my laptop, I had every piece of content finished through the end of August.</p>

<p>Was it exhausting?</p>
<p>Absolutely.</p>

<p>Was it worth it?</p>

<p><strong>Completely.</strong></p>

<p>Now, when I get home from work, I get to close my computer.</p>

<p>I get to be present.</p>

<p>Not pretending to watch a movie while secretly answering comments.</p>

<p>Not checking analytics every fifteen minutes.</p>

<p>Just...</p>

<p><strong>Mom.</strong></p>

<h2>The Internet Can Wait</h2>

<p>The internet will always want more.</p>

<p>Another post.</p>
<p>Another video.</p>
<p>Another trend.</p>

<p>But my kids won't always be six and seventeen.</p>

<p>I don't want my memories of this summer measured in views, reach, and engagement.</p>

<p>I want them measured in bike rides, belly laughs, movie nights, and late-night ice cream runs.</p>

<p>Balance isn't something I've mastered.</p>

<p>Honestly, I'm not even sure it exists.</p>

<p>Sometimes balance looks like doing a little every day.</p>

<p>Sometimes it looks like working eleven straight hours on a Saturday so you can be fully present for the weeks that follow.</p>

<blockquote style="border-left:4px solid #7c3aed;padding-left:1rem;margin:2rem 0;font-style:italic;color:#4b5563;">
Maybe work-life balance isn't found.<br/><br/>
Maybe it's created.<br/><br/>
One intentional decision at a time.
</blockquote>

<p>This weekend, that's what balance looked like for me.</p>

<p>Because careers matter.</p>

<p>Dreams matter.</p>

<p>Goals matter.</p>

<p><strong>But these summers?<br/>These moments?<br/>These kids?</strong></p>

<p><strong>They matter more.</strong></p>

<hr/>

<h2>Related Posts</h2>

<ul>
<li><a href="/blog/what-survival-mode-looks-like-when-youre-high-functioning">What Survival Mode Looks Like When You're High Functioning</a></li>
<li><a href="/blog/the-other-side-of-creativity">The Other Side of Creativity</a></li>
<li><a href="/blog/the-risk-of-choosing-yourself">The Risk of Choosing Yourself</a></li>
</ul>

<h2>Helpful Resources</h2>

<ul>
<li><a href="https://www.aap.org" target="_blank">American Academy of Pediatrics</a></li>
<li><a href="https://www.commonsensemedia.org" target="_blank">Common Sense Media</a></li>
</ul>

<p>— Jen</p>
`
},
{
  slug: "why-adults-forget-how-to-play",
  title: "Why Adults Forget How to Play",
  date: "2026-07-22",
  excerpt: "A quiet evening with my children reminded me that play isn't a distraction from life. Sometimes it is life.",
  featuredImage: "/images/uploads/why-adults-forget-how-to-play.png",
  tags: ["Motherhood","Parenting","Personal Growth","Presence","Family"],
  content: `
<h1>Why Adults Forget How to Play</h1>

<p>There was a moment recently that stopped me in my tracks.</p>

<p>Not because something terrible happened.</p>

<p>I was simply making dinner.</p>

<p>Like so many evenings, my body was in the kitchen while my mind was somewhere else entirely. I was already thinking about work waiting for me after dinner, social media to schedule, projects to finish, emails to answer, and all the little responsibilities that quietly pile up in adulthood.</p>

<p>Then my daughter walked into the kitchen.</p>

<p>"Mom, will you play with me?"</p>

<p>Without thinking, I answered, <strong>"Not right now, Mads. I'm making dinner."</strong></p>

<p>She paused.</p>

<p>Then she quietly said, <strong>"I don't want to play alone."</strong></p>

<p>I finished making dinner.</p>

<p>But I couldn't stop thinking about those six words.</p>

<h2>It Was Never About the Game</h2>

<p>Looking back, I don't think she was asking me to play a game.</p>

<p>She was asking for me.</p>

<p>Somewhere between deadlines, dishes, laundry, work, music, and trying to build a future for my family, I'd forgotten something children seem to know instinctively.</p>

<p><strong>How to play.</strong></p>

<p>It reminded me of something I wrote in <a href="/blog/what-survival-mode-looks-like-when-youre-high-functioning" style="color:#7c3aed;font-weight:700;text-decoration:underline;text-decoration-thickness:2px;text-underline-offset:3px;"><strong><em>What Survival Mode Looks Like When You're High Functioning</em></strong></a>. Sometimes we become so productive that we mistake constant motion for a life well lived.</p>

<blockquote style="border-left:4px solid #7c3aed;padding-left:1rem;margin:1.5rem 0;font-style:italic;color:#4b5563;">
Children don't remember how productive you were.<br/><br/>
They remember whether you sat on the floor.
</blockquote>

<h2>This Wasn't the First Time</h2>

<p>The hardest realization was that this wasn't the first reminder I'd been given.</p>

<p>Years ago, when Aiden was about nine, he tried to teach me the same lesson.</p>

<p>Different house.</p>
<p>Different season.</p>
<p>Same mom.</p>

<p>Always believing I'd play after I finished one more thing.</p>

<p>There is always one more thing.</p>

<p>Looking back, I realize this connects to what I've been exploring in <a href="/blog/breaking-patterns-personal-growth" style="color:#7c3aed;font-weight:700;text-decoration:underline;text-decoration-thickness:2px;text-underline-offset:3px;"><strong><em>Breaking Patterns: The Moment You Realize You Can Choose Differently</em></strong></a>.</p>

<h2>Choosing Differently</h2>

<p>That night, after dinner, I made a different choice.</p>

<p>The dishes could wait.</p>
<p>The emails could wait.</p>
<p>The content calendar could wait.</p>

<p>I sat on the living room floor with Mads.</p>

<p>We pulled out the Mancala board.</p>

<p>First it was Mads versus me.</p>

<p>Then Aiden joined us.</p>

<p>Watching my seventeen-year-old son happily sit on the floor and play Mancala with his little sister is a memory I'll carry for a long time.</p>

<p>Afterward we picked a movie and watched it together.</p>

<p>Later that night we colored pictures.</p>

<h2>Maybe Adults Need Play Too</h2>

<p>I realized something unexpected.</p>

<p>I needed that night every bit as much as my kids did.</p>

<p>Play didn't distract me from my responsibilities.</p>

<p>It reminded me why those responsibilities matter in the first place.</p>

<p>In my first post, <a href="/blog/inherited-weather-introduction" style="color:#7c3aed;font-weight:700;text-decoration:underline;text-decoration-thickness:2px;text-underline-offset:3px;"><strong><em>Inherited Weather: Why I'm Finally Sharing My Story</em></strong></a>, I wrote about the emotional patterns we inherit without choosing.</p>

<blockquote style="border-left:4px solid #7c3aed;padding-left:1rem;margin:1.5rem 0;font-style:italic;color:#4b5563;">
The to-do list will still be there tomorrow.<br/><br/>
Your child won't always ask you to play.
</blockquote>

<p>Research consistently shows that unstructured play supports children's emotional, social, and cognitive development, while shared play strengthens parent-child relationships. Learn more from the <a href="https://developingchild.harvard.edu/" target="_blank" rel="noopener noreferrer" style="color:#2563eb;font-weight:700;text-decoration:underline;"><strong>Harvard Center on the Developing Child</strong></a> and the <a href="https://publications.aap.org/pediatrics/article/142/3/e20182058/37558/The-Power-of-Play-A-Pediatric-Role-in-Enhancing" target="_blank" rel="noopener noreferrer" style="color:#2563eb;font-weight:700;text-decoration:underline;"><strong>American Academy of Pediatrics' article on the power of play</strong></a>.</p>

<h2>The Lesson I'll Carry Forward</h2>

<p>I don't think my children will remember whether dinner was five minutes late.</p>
<p>They probably won't remember another email I answered.</p>
<p>But maybe they'll remember sitting on the living room floor playing Mancala.</p>
<p>Watching a movie together.</p>
<p>Coloring pictures before bed.</p>
<p>Maybe they'll remember that, for one ordinary evening, Mom chose them over her to-do list.</p>
<p>Sometimes the biggest lessons don't come from books.</p>
<p>Sometimes they come from a six-year-old standing in the kitchen saying, <strong>"I don't want to play alone."</strong></p>
<p>I don't think she realized she was changing me.</p>
<p>But she did.</p>
<p>Because somewhere between Mancala, a movie, and a box of crayons...</p>
<p>I remembered something I didn't even realize I'd lost.</p>
<p><strong>How to play.</strong></p>

<p>— Jen</p>
`
},
  {
  slug: "somehow-shes-six",
  title: "Somehow, She's Six",
  date: "2026-08-12",
  excerpt: "We spend so much time raising our children that sometimes we don't notice they're raising us, too. Aiden changed me at 19. Madelyn changed me all over again six years ago.",
  featuredImage: "/images/uploads/somehow-shes-six.png",
  tags: ["Motherhood", "Parenting", "Personal Growth", "Family"],
  content: `

<h1>Somehow, She's Six</h1>

<p>My daughter turned six today.</p>

<p>And even typing that feels strange.</p>

<p style="text-align:center; font-size:1.4rem;"><strong>Six.</strong></p>

<p>Not a baby. Not a toddler. Not even really a <em>little</em> little kid anymore.</p>

<p>Six years ago, Madelyn Rose came barreling into our lives with absolutely no intention of being a quiet presence in them.</p>

<p>And honestly, that tracks.</p>

<p>She's funny and fearless, stubborn and spunky, loving and completely unapologetically herself.</p>

<p>She challenges me constantly, sometimes in ways that make me question every parenting decision I've ever made.</p>

<p>But she also challenges me in the best possible way.</p>

<p><strong>She makes me grow.</strong></p>

<p>And maybe that's the part of parenting we don't talk about enough.</p>

<blockquote style="border-left: 4px solid #7c3aed; padding-left: 1rem; margin: 2rem 0; font-style: italic; color: #4b5563;">
We spend so much time raising our children that sometimes we don't notice they're raising us, too.
</blockquote>

<br/>

<h2>The First Person Who Raised Me</h2>

<p>I know that because Madelyn isn't the first person who raised me.</p>

<p><strong>Aiden was.</strong></p>

<p>I was 19 when I became his mom.</p>

<p>Nineteen.</p>

<p>At 19, I was still figuring out who I was supposed to be.</p>

<p>I didn't have some fully formed version of myself waiting in the wings, ready to step gracefully into motherhood.</p>

<p>I was still growing up.</p>

<p>And suddenly, I was responsible for helping another human being grow up, too.</p>

<p>So we did it together.</p>

<p>I raised Aiden, but in so many ways, Aiden raised me.</p>

<p>He taught me how to put another person before myself.</p>

<p>He taught me patience and persistence.</p>

<p>He taught me how to advocate, how to keep going when things were hard and how much strength you can somehow find when someone you love needs you to find it.</p>

<p><strong>Every new stage of his life required a new version of me.</strong></p>

<br/>

<h2>Then Madelyn Came Along</h2>

<p>And then, twelve years later, I had Madelyn.</p>

<p>By then, I thought I understood motherhood.</p>

<p>I'd been doing this for more than a decade.</p>

<p>I wasn't the scared 19 year old trying to figure everything out anymore.</p>

<p>Then Madelyn showed up and basically said...</p>

<p style="text-align:center;"><strong><em>That's adorable. Anyway...</em></strong> 😂</p>

<p>And she changed me all over again.</p>

<p>Because here's the thing no one really tells you about having a second child:</p>

<p style="text-align:center; font-size:1.25rem;"><strong>You don't just get another baby.</strong></p>

<p style="text-align:center; font-size:1.25rem;"><strong>You get another teacher.</strong></p>

<br/>

<h2>She Needed a Different Mom</h2>

<p>Madelyn didn't need the same mom Aiden needed.</p>

<p>She needed me to learn new things about patience.</p>

<p>She needed me to loosen my grip on some things and stand firmer on others.</p>

<p>She needed me to understand that sometimes the qualities that make parenting a child challenging are the exact qualities you hope they never lose.</p>

<p>That stubbornness?</p>

<p><strong>Someday, I hope it means she refuses to let someone walk all over her.</strong></p>

<p>That independence that occasionally makes me want to pull my hair out?</p>

<p><strong>I hope she keeps every ounce of it.</strong></p>

<p>That huge personality that enters a room approximately three minutes before the rest of her?</p>

<p><strong>I hope nobody ever convinces her to make herself smaller.</strong></p>

<p>And that's where she has changed me.</p>

<p>Because raising Madelyn isn't just about teaching her how to behave or make good choices or become a good person.</p>

<p>Sometimes it's about learning when <strong>not</strong> to change her.</p>

<blockquote style="border-left: 4px solid #7c3aed; padding-left: 1rem; margin: 2rem 0; font-style: italic; color: #4b5563;">
Sometimes my job isn't to mold her into the easiest version of herself to parent.<br/><br/>
It's to help her become the strongest version of herself to send out into the world.
</blockquote>

<p>And that has required me to grow, too.</p>

<br/>

<h2>Two Kids. Two Versions of Me.</h2>

<p>It's funny when I think about the fact that my children are twelve years apart.</p>

<p>Aiden met me at 19.</p>

<p>Madelyn met me at 31.</p>

<p>Two completely different versions of me.</p>

<p>But neither of those versions stayed around for very long.</p>

<p>Because Aiden changed the 19 year old who held him for the first time.</p>

<p>And Madelyn changed the 31 year old who thought she already knew what being a mom meant.</p>

<p><strong>They're still changing me now.</strong></p>

<p>My first baby is 18.</p>

<p>My youngest is six.</p>

<p>One is standing at the beginning of adulthood while the other is standing at the beginning of this whole new chapter of childhood.</p>

<p>And somehow I'm supposed to know how to mother both of those things at the same time.</p>

<p style="text-align:center;"><strong>Spoiler alert: I do not.</strong></p>

<p>I'm still figuring it out.</p>

<br/>

<h2>Maybe That's What Motherhood Actually Is</h2>

<p>Maybe motherhood isn't reaching some magical point where you finally know what you're doing.</p>

<p>Maybe it's becoming the person your children need during whatever season you're all in.</p>

<p>Sometimes you get it right.</p>

<p>Sometimes you absolutely do not.</p>

<p>Sometimes you apologize.</p>

<p>Sometimes you change your approach.</p>

<p>Sometimes you lie awake wondering if you're doing any of this correctly.</p>

<p>And then occasionally, you look at the people your children are becoming and think...</p>

<p style="text-align:center; font-size:1.2rem;"><strong><em>Okay. Maybe I'm not doing so bad.</em></strong></p>

<br/>

<h2>And Somehow, She's Six</h2>

<p>Today, though, I'm thinking mostly about six.</p>

<p><strong>Six years of Madelyn Rose.</strong></p>

<p>Six years of an enormous personality packed into a tiny person.</p>

<p>Six years of laughter, sass, dancing, questions, opinions, hugs, negotiations and stories that I know I'll still be telling when she's 30.</p>

<p>And six years of watching her become more and more herself.</p>

<p>That's the bittersweet part of birthdays.</p>

<p><strong>We celebrate every new year while secretly mourning the version of them we're leaving behind.</strong></p>

<p>I miss baby Madelyn.</p>

<p>I miss toddler Madelyn.</p>

<p>Someday, I'm going to desperately miss the six year old Madelyn standing in front of me right now.</p>

<p>But I also can't wait to meet seven year old Madelyn.</p>

<p>And ten year old Madelyn.</p>

<p>And sixteen year old Madelyn.</p>

<p>And thirty year old Madelyn.</p>

<p>I want to know what she does with all this fire inside of her.</p>

<p>I want to see where that confidence takes her.</p>

<p>I want to see what happens when this funny, fearless, stubborn, loving little girl realizes just how capable she is.</p>

<br/>

<h2>I'm Still Becoming, Too</h2>

<p>And I hope that as she grows, I remember that I'm allowed to keep growing, too.</p>

<p>Because becoming a mother didn't finish the story of who I am.</p>

<p><strong>It became part of it.</strong></p>

<p>Aiden made me a mom at 19.</p>

<p>Madelyn made me a different one at 31.</p>

<p>And both of them have spent their entire lives teaching me that motherhood isn't a person you become once.</p>

<p style="text-align:center;">
<strong>
You keep becoming her.<br/><br/>
At 19.<br/>
At 31.<br/>
At 37.<br/><br/>
At every birthday, every milestone, every hard season and every completely ordinary day in between.
</strong>
</p>

<p>I've spent eighteen years raising my children.</p>

<p><strong>It took me a long time to realize they've spent eighteen years raising me, too.</strong></p>

<br/>

<h2>Happy Birthday, Madelyn Rose</h2>

<p>So happy sixth birthday, Madelyn Rose.</p>

<p>You are one of the funniest, coolest, spunkiest people I know.</p>

<p>You challenge me in ways I never expected, and somehow you always seem to teach me something in the process.</p>

<p>I hope you never lose that fire.</p>

<p>I hope you never make yourself smaller to make somebody else more comfortable.</p>

<p>I hope you stay curious and loud and weird and hilarious and completely, unapologetically you.</p>

<p>And someday, when you're old enough to read all the things your mom wrote about you on the internet and be appropriately embarrassed, I hope you know this:</p>

<blockquote style="border-left: 4px solid #7c3aed; padding-left: 1rem; margin: 2rem 0; font-style: italic; color: #4b5563;">
I thought I was supposed to spend my life teaching you how to become a person.<br/><br/>
Turns out, you've been teaching me, too.
</blockquote>

<p style="text-align:center;">
<strong>
Somehow, you're six.<br/><br/>
And somehow, after eighteen years of being somebody's mom, I'm still becoming one.<br/><br/>
I think maybe I always will be.
</strong>
</p>

<br/>

<p>— Jen</p>

`
},
  {
  slug: "before-i-wrote-songs-i-lived-in-8-counts",
  title: "Before I Wrote Songs, I Lived in 8 Counts",
  date: "2026-08-19",
  excerpt: "Dance was never just an activity in my life. It shaped my childhood, carried me across the world, became my career, and eventually taught me how to write songs.",
  featuredImage: "/images/uploads/in-8-counts-blog.png",
  tags: ["Music", "Dance", "Songwriting", "Choreography", "Personal Growth", "Behind the Scenes"],
  content: `

<h1>Before I Wrote Songs, I Lived in 8 Counts</h1>

<p style="text-align:center; font-size:1.3rem;">
<strong>Before I ever wrote songs, I lived in 8 counts.</strong>
</p>

<p>Dance was not simply an activity I did growing up.</p>

<p>It was not one hobby among many or a class I attended once a week.</p>

<p><strong>Dance was my life.</strong></p>

<p>It determined where I went after school, what I did on weekends, who my friends were, what I dreamed about, and how I understood myself.</p>

<p>My childhood can be measured in rehearsals, recitals, competitions, costumes, performances, and counts of eight.</p>

<p>Long before I knew how to explain what I was feeling, I knew how to move through it.</p>

<blockquote style="border-left:4px solid #7c3aed; padding-left:1rem; margin:2rem 0; font-style:italic; color:#4b5563;">
Dance was my first language.<br/><br/>
Songwriting eventually became another way to speak.
</blockquote>

<br/>

<h2>Where It All Began</h2>

<p>My relationship with dance began when I was three years old and my mom enrolled me in park district classes.</p>

<p>I fell in love with it almost immediately.</p>

<p>In those early years, I studied ballet, tap, and jazz. I had my first recital when I was five. I loved the costumes, the music, the excitement backstage, and the feeling of stepping onto a stage.</p>

<p>Even then, performing felt natural to me.</p>

<p>The stage was a place where I could be bigger, braver, and more expressive than I always knew how to be in everyday life.</p>

<p>As I grew, dance became more serious.</p>

<p>It was no longer only about putting on a costume and remembering the steps. It became about technique, discipline, musicality, expression, and learning how to keep going when something did not go perfectly.</p>

<p>I learned how to listen for the count and trust my body.</p>

<p>I learned how to take corrections without allowing them to destroy my confidence.</p>

<p>I learned that being strong did not mean never making mistakes. It meant recovering quickly enough that the audience never knew one happened.</p>

<p><strong>Dance was teaching me how to live long before I realized those lessons extended beyond the studio.</strong></p>

<br/>

<h2>Tiny but Fierce</h2>

<p>By high school, dance had completely taken over my life.</p>

<p>I danced with Orchesis. I was part of the Maine West Poms team. I trained, rehearsed, performed, and pushed myself constantly.</p>

<p>I wanted to be better, stronger, sharper, and more expressive.</p>

<p>This was also when I earned the nickname <strong>“Mighty Mouse.”</strong></p>

<p>I may have been tiny, but I danced fiercely.</p>

<p>Dance gave me a kind of confidence that I did not always have anywhere else. When the music started, I did not need to apologize for taking up space.</p>

<p>I could be powerful.</p>

<p>I could be bold.</p>

<p>I could command attention.</p>

<p><strong>I could be completely myself.</strong></p>

<p>Those years also taught me how much work exists behind a few minutes onstage.</p>

<p>An audience sees the finished performance. They do not see the hours spent drilling the same section, fixing formations, cleaning transitions, stretching tired muscles, or repeating eight counts until an entire group finally moves as one.</p>

<p>They do not see the nerves before an audition or the disappointment when something does not go your way.</p>

<p>They see the performance.</p>

<blockquote style="border-left:4px solid #7c3aed; padding-left:1rem; margin:2rem 0; font-style:italic; color:#4b5563;">
Dance taught me that the magic people experience is usually built from hundreds of moments they will never see.
</blockquote>

<br/>

<h2>From Maine West to Paris</h2>

<p>One of the most unforgettable moments of my dance life came when I was selected for the <a href="https://www.varsity.com/uda/" target="_blank" rel="noopener noreferrer" style="color:#2563eb; font-weight:700; text-decoration:underline; text-decoration-thickness:2px; text-underline-offset:3px;"><strong>Universal Dance Association</strong></a> All Star Team.</p>

<p>I was the only member of the Maine West Poms team chosen for the opportunity.</p>

<p>I was selected to represent my school and Illinois in a New Year’s Day parade in Paris, France.</p>

<p style="text-align:center; font-size:1.25rem;">
<strong>Dance took me all the way to the Eiffel Tower.</strong>
</p>

<p>I performed in my UDA uniform with my pom poms, surrounded by dancers from around the world.</p>

<p>Something that had started in a park district class had carried me across an ocean.</p>

<p>That experience showed me that dance could make my world bigger.</p>

<p>It could take me beyond what was familiar. It could introduce me to people, places, and possibilities I might never have experienced otherwise.</p>

<p>All of the rehearsals, corrections, sore muscles, early mornings, and long days had led to something I once could not have imagined.</p>

<p><strong>I was not simply a girl who liked to dance.</strong></p>

<p style="text-align:center; font-size:1.35rem;">
<strong>I was a dancer.</strong>
</p>

<br/>

<h2>Living Backstage</h2>

<p>Competitive dance and performing taught me to thrive inside a very specific kind of chaos.</p>

<p>There were rehearsals, competitions, quick changes, missing costume pieces, stage entrances, last minute corrections, and the constant mental calculation of how much time remained before the next number.</p>

<p>In one show, I performed in 22 out of 29 dances.</p>

<p style="text-align:center; font-size:1.25rem;">
<strong>That meant 22 costume changes.</strong>
</p>

<p>I moved from lyrical dresses to hip hop costumes, character pieces, jazz numbers, and salsa.</p>

<p>I barely had time to finish one dance before I was backstage changing into the next version of myself.</p>

<p>It was exhausting.</p>

<p><strong>It was also exhilarating.</strong></p>

<p>Every costume represented a different story. Every style asked me to access a different emotion, energy, and part of my personality.</p>

<ul>
  <li><strong>Contemporary</strong> allowed me to express emotional depth.</li>
  <li><strong>Hip hop</strong> allowed me to be fierce, confident, and free.</li>
  <li><strong>Ballet</strong> demanded precision and control.</li>
  <li><strong>Jazz</strong> brought performance, energy, and joy.</li>
</ul>

<p>I did not simply perform choreography.</p>

<p><strong>I lived inside it.</strong></p>

<p>Dance taught me that one person can contain many different stories.</p>

<p>That lesson would eventually follow me into my songwriting.</p>

<br/>

<h2>Dance as an Art Form</h2>

<p>When I entered college and studied dance and performing arts, my understanding of dance grew again.</p>

<p>Dance was no longer only something I trained to do well. It was an art form I could study, question, create, and use to communicate.</p>

<p>I received a dance scholarship. I studied modern dance, performed in repertory ensembles, participated in workshops and conferences, and experienced dance in a more expansive way.</p>

<p>College challenged me to think about movement differently.</p>

<p style="text-align:center;">
<strong>
Why this movement?<br/><br/>
Why this song?<br/><br/>
What are we trying to communicate?<br/><br/>
What should the audience feel?
</strong>
</p>

<p>Dance could tell a story without using a single word.</p>

<p>A reach, a turn, a fall, or even a pause could communicate something language could not.</p>

<p>I began to understand that choreography was not about filling every second with movement.</p>

<p>Sometimes the most meaningful choice was stillness.</p>

<p>Sometimes the audience needed a moment to sit with what had just happened.</p>

<p><strong>Years later, I would discover that songwriting works the same way.</strong></p>

<br/>

<h2>Becoming the Teacher</h2>

<p>Eventually, I moved from being the student taking corrections to the teacher giving them.</p>

<p>I began teaching dance in Chicago in 2012. I taught children, teenagers, and adults. I worked with beginners taking their first steps and experienced dancers preparing for auditions and performances.</p>

<p>Teaching made me fall in love with dance in an entirely new way.</p>

<p>As a dancer, I had spent years focusing on my own body, technique, and performance. As a teacher, I had to learn how to see dance through someone else’s eyes.</p>

<p>Every student learns differently.</p>

<p>A direction that makes perfect sense to one dancer might confuse another. Some students need to hear the count. Some need to see the movement. Some need to understand the story behind it.</p>

<p>Others need someone to believe in them until they are ready to believe in themselves.</p>

<p><strong>My job was never only to teach steps.</strong></p>

<p>It was to help students build confidence. It was to create a place where they could take risks, make mistakes, and discover what they were capable of doing.</p>

<p>There is nothing quite like seeing the expression on a student’s face when they finally accomplish something they once believed they could not do.</p>

<p><strong>Those moments are priceless.</strong></p>

<br/>

<h2>Building T3</h2>

<p>Teaching eventually led me to create and own <a href="https://twinkletoes2day.com/#/from-owner" target="_blank" rel="noopener noreferrer" style="color:#2563eb; font-weight:700; text-decoration:underline; text-decoration-thickness:2px; text-underline-offset:3px;"><strong>Twinkle Toes Today, or T3</strong></a>.</p>

<p>T3 brought so many pieces of my dance life together.</p>

<p>I became the owner, director, instructor, choreographer, mentor, and person responsible for turning a creative vision into something real.</p>

<p>Owning T3 was about more than running a dance business. It was about creating the kind of environment I believed dancers deserved.</p>

<p>I wanted students to feel encouraged while still being challenged.</p>

<p>I wanted dance to build self esteem instead of tearing it down.</p>

<p>I wanted every student, regardless of age or ability, to feel that dance could belong to them.</p>

<p>Through T3, I was able to take everything dance had given me and offer it to someone else.</p>

<p style="text-align:center; font-size:1.15rem;">
<strong>
The confidence.<br/><br/>
The creativity.<br/><br/>
The discipline.<br/><br/>
The joy.<br/><br/>
The freedom of hearing music and allowing your body to answer it.
</strong>
</p>

<p>Dance had shaped nearly every version of me.</p>

<p>The little girl in her first costume.</p>

<p>The Mighty Mouse who danced bigger than her body.</p>

<p>The Poms dancer representing Illinois in Paris.</p>

<p>The college performer.</p>

<p>The choreographer.</p>

<p>The teacher.</p>

<p>The business owner.</p>

<blockquote style="border-left:4px solid #7c3aed; padding-left:1rem; margin:2rem 0; font-style:italic; color:#4b5563;">
It was never just what I did.<br/><br/>
It was who I was.<br/><br/>
It is still part of who I am.
</blockquote>

<br/>

<h2>Choreography Was My First Songwriting</h2>

<p>Long before I started writing songs, I was already telling stories through choreography.</p>

<p>My choreography process usually begins with an emotion, an image, or a story.</p>

<p>I listen to the music and wait for something to reveal itself. Sometimes I see a specific movement immediately. Sometimes I hear one part of the song over and over before I understand what it is asking me to create.</p>

<p>Then I begin building.</p>

<p>One movement becomes a phrase.</p>

<p>One phrase becomes a section.</p>

<p>Sections begin connecting until there is a complete piece.</p>

<p><strong>Songwriting feels incredibly similar.</strong></p>

<p>A lyric can appear the same way a movement does. It might be one line, one image, or one feeling that refuses to leave me alone.</p>

<p>I build around it until the rest of the story begins to emerge.</p>

<ul>
  <li>A verse establishes where we are.</li>
  <li>A chorus returns us to the emotion at the center of everything.</li>
  <li>A bridge changes the movement of the story.</li>
</ul>

<p>Choreography has formations, transitions, repetition, contrast, and moments of stillness.</p>

<p>Songs have arrangements, transitions, repeated melodies, changing dynamics, and silence.</p>

<p>Both processes require editing.</p>

<p>Sometimes I create a movement or write a lyric that I love, but it does not serve the full piece. I have to be willing to change it, move it, or remove it.</p>

<p>Both require me to ask the same question:</p>

<p style="text-align:center; font-size:1.25rem;">
<strong><em>What am I trying to make people feel?</em></strong>
</p>

<p>The medium may be different, but the goal is the same. I am taking something that exists inside of me and turning it into something another person can experience.</p>

<p>I explored that transformation in <a href="/blog/writing-the-songs-changed-the-memory-too" style="color:#7c3aed; font-weight:700; text-decoration:underline; text-decoration-thickness:2px; text-underline-offset:3px;"><strong><em>Writing the Songs Changed the Memory Too</em></strong></a>.</p>

<p>Dance was my first language.</p>

<p><strong>Songwriting became another way to speak.</strong></p>

<br/>

<h2>The Story Behind “In 8 Counts”</h2>

<p>“In 8 Counts” brings those two parts of my life together.</p>

<p>Dance is the language of the song, but the song is about much more than dance.</p>

<p style="text-align:center; font-size:1.3rem;">
<strong>It is about survival.</strong>
</p>

<p>It is about resilience, healing, and finding your way forward when life has knocked you out of rhythm.</p>

<p>Dance was often a refuge for me.</p>

<p>When other parts of my life felt confusing or outside of my control, dance gave me something solid.</p>

<p>I could listen for the music.</p>

<p>I could find the count.</p>

<p>I could take the next step.</p>

<p style="text-align:center; font-size:1.4rem; line-height:1.8;">
<strong>
One, two, three, four.<br/>
Five, six, seven, eight.
</strong>
</p>

<p style="text-align:center;"><strong>Then I could begin again.</strong></p>

<p>Everyone has an eight count.</p>

<p>Maybe yours is starting over after a loss.</p>

<p>Maybe it is finally chasing the dream you have continued to postpone.</p>

<p>Maybe it is learning who you are outside of the roles other people have assigned to you.</p>

<p>Maybe it is simply getting through today so you can try again tomorrow.</p>

<blockquote style="border-left:4px solid #7c3aed; padding-left:1rem; margin:2rem 0; font-style:italic; color:#4b5563;">
You do not always need to know the entire routine.<br/><br/>
Sometimes you only need to find the next count.
</blockquote>

<br/>

<h2>When the Vision Takes Longer Than Expected</h2>

<p>I had a very specific vision for the “In 8 Counts” music video.</p>

<p>I imagined dancers representing different stages, emotions, and experiences. I wanted them to bring their own stories to the movement.</p>

<p>I wanted individual pieces to come together and show how differently people can experience pain, growth, healing, and resilience.</p>

<p><strong>I could see it clearly in my mind.</strong></p>

<p>Turning that vision into a finished video has been much more difficult than I expected.</p>

<p>There are dancers’ schedules to coordinate, choreography to create, locations to arrange, footage to collect, group scenes to film, and an entire story to edit together.</p>

<p>A music video is not simply a matter of pressing record.</p>

<p><strong>It is a production.</strong></p>

<p>I have been trying to build it while also working, parenting, creating, promoting my music, and managing every other part of life.</p>

<p>My original timeline was not realistic.</p>

<p>That has been difficult for me to accept because the dancer in me wants everything to land exactly on the count.</p>

<p>I want the song, choreography, filming, editing, and release to come together at precisely the right moment.</p>

<p>But life does not always follow the choreography we planned.</p>

<p>This is the part of creativity people do not always see, something I wrote about in <a href="/blog/the-other-side-of-creativity" style="color:#7c3aed; font-weight:700; text-decoration:underline; text-decoration-thickness:2px; text-underline-offset:3px;"><strong><em>The Other Side of Creativity</em></strong></a>.</p>

<p>Sometimes the music changes.</p>

<p>Sometimes someone misses an entrance.</p>

<p>Sometimes the costume zipper breaks backstage while you are supposed to be preparing for your next number.</p>

<p>And sometimes the dream takes longer than you thought it would.</p>

<p><strong>That does not mean you walk off the stage.</strong></p>

<p>You breathe.</p>

<p>You listen.</p>

<p>You find the count again.</p>

<br/>

<h2>I Am Not Giving Up</h2>

<p>“In 8 Counts” comes out Friday, August 21.</p>

<p>The music video will not be completed on the timeline I originally imagined.</p>

<p>I am disappointed about that, but I am not giving up on the vision.</p>

<p>The song can be released now, and the visual story can follow when it is ready.</p>

<p style="text-align:center; font-size:1.35rem;">
<strong>A delayed dream is not a dead dream.</strong>
</p>

<p>Dance has taught me that progress does not always look perfect.</p>

<p>Sometimes progress is finishing the routine exactly as planned.</p>

<p>Sometimes it is recovering after a mistake.</p>

<p>Sometimes it is standing backstage, exhausted and overwhelmed, changing into your twenty second costume because the next dance is about to begin.</p>

<p>And sometimes progress is admitting that something is harder than you expected while choosing to continue anyway.</p>

<p>This song exists because dance taught me how to survive difficult things.</p>

<p>It taught me how to fall without allowing the fall to become the ending.</p>

<p>It taught me how to work, create, adjust, and begin again.</p>

<p>The little girl in the park district class could never have imagined all the places dance would take her.</p>

<p>She could not have known that she would perform in Paris, dance in 22 numbers in one show, study performing arts in college, teach generations of students, own a dance business, choreograph original work, or eventually write and release a song inspired by everything dance had taught her.</p>

<p>But she knew she loved to move.</p>

<p>She heard the music.</p>

<p>She found the count.</p>

<p><strong>And she began.</strong></p>

<br/>

<h2>I Am Still Dancing</h2>

<p>All these years later, that is still what I am doing.</p>

<p>The timeline may not be perfect.</p>

<p>The video may take longer.</p>

<p>The dream may continue to change as I bring it to life.</p>

<p>But I am still listening.</p>

<p>I am still creating.</p>

<p>I am still finding my way forward.</p>

<blockquote style="border-left:4px solid #7c3aed; padding-left:1rem; margin:2rem 0; font-style:italic; color:#4b5563; text-align:center;">
<strong>
The music is still playing.<br/><br/>
The dream is still alive.<br/><br/>
And I am not done dancing yet.
</strong>
</blockquote>

<p style="text-align:center; font-size:1.5rem;">
<strong>Five, six, seven, eight.</strong>
</p>

<br/>

<p>— Jen</p>

`
},
{
  slug: "when-the-kid-you-looked-up-to-was-just-a-kid-too",
  title: "When the Kid You Looked Up to Was Just a Kid Too",
  date: "2026-09-09",
  excerpt: "What happens when you grow up and realize the person you looked up to may have been a bad influence? Sometimes the truth is more complicated: they were a kid too, teaching survival skills they didn't yet know were survival skills.",
  featuredImage: "/images/uploads/bad-influence-blog.png",
  tags: ["Personal Growth", "Healing", "Childhood", "Breaking Patterns", "Self Awareness"],
  readTime: "10 min read",
  content: `

    <p>I recently had a conversation with an old friend that kind of fucked with me.</p>

    <p>Not because they said something completely new.</p>

    <p>Actually, part of what made it hit so hard was that it changed the meaning of something they had told me years ago.</p>

    <p>When we were younger, they used to tell me they looked up to me.</p>

    <p>Even as adults, that came up again. The last time I remember them saying it was probably about five years ago.</p>

    <p>And I carried that with me.</p>

    <p>Not in some giant ego way.</p>

    <p>Just as one of those strangely meaningful things you learn about yourself through somebody else's eyes.</p>

    <p><em>They looked up to me.</em></p>

    <p>Then, during a recent conversation, we started talking about the past again.</p>

    <p>And this time, after having more years to reflect on who we were back then, they told me something different.</p>

    <p><strong>Looking back now, they think I was a bad influence.</strong></p>

    <p style="text-align:center; font-size:1.15rem; margin:2rem 0;">
      <strong>Oh.</strong>
    </p>

    <p>Well then.</p>

    <p>There is something especially humbling about realizing that someone can have looked up to you <em>and</em> eventually look back at some of what you influenced and think,</p>

    <p style="text-align:center;">
      <strong>Yeah... maybe that wasn't actually good for me.</strong>
    </p>

    <p>And the annoying part?</p>

    <p><strong>I understood what they meant.</strong></p>

    <p>Not because I suddenly looked back and saw myself as some terrible kid who was deliberately leading people down the wrong path.</p>

    <p>I wasn't some teenage supervillain standing outside school handing out cigarettes and terrible life advice.</p>

    <p>I know who I was.</p>

    <p>I know what I meant.</p>

    <p>And I know how much I cared about the people around me.</p>

    <p>I loved my friends hard.</p>

    <p>I protected people.</p>

    <p>I stood up for people.</p>

    <p>I said the thing everyone else was afraid to say.</p>

    <p>I pushed people to stop taking shit from other people.</p>

    <p>I wanted the people I loved to feel brave.</p>

    <p>And sometimes I genuinely thought I was helping.</p>

    <p>But reflection is a strange thing.</p>

    <p>Because when enough time passes, you stop looking only at what you <em>meant</em> to do.</p>

    <p>You start being able to see what you actually modeled.</p>

    <p>And here is the uncomfortable part:</p>

    <blockquote style="border-left: 4px solid #7c3aed; padding-left: 1rem; margin: 2rem 0; font-style: italic; color: #4b5563; line-height: 1.8;">
      You can genuinely love someone and still teach them unhealthy things.<br/><br/>
      You can mean well and still have a negative impact.<br/><br/>
      You can be somebody’s safe person and still model behaviors they eventually have to unlearn.
    </blockquote>

    <p>Especially when you are a kid yourself.</p>

    <p>Because at that age, you might not even realize you're teaching anyone anything.</p>


    <h2>Kids Teach Each Other What They Know</h2>

    <p>When adults talk about a “bad influence,” we usually imagine one kid who has everything figured out and is purposely dragging another kid down some dark path.</p>

    <p>The troublemaker.</p>

    <p>The wild one.</p>

    <p>The kid your parents warned you about.</p>

    <p>But I don’t think childhood and adolescence are usually that simple.</p>

    <p>Sometimes the “bad influence” is just another kid trying to survive with whatever tools they happened to have.</p>

    <p><strong>And kids teach each other what they know.</strong></p>

    <p>
      If the tools you learned were anger, you teach anger.<br/><br/>
      If you learned that shutting down keeps you safe, you teach avoidance.<br/><br/>
      If lying kept you out of trouble, you might teach someone how to lie.<br/><br/>
      If fighting back was the only time anyone listened to you, you might teach someone that aggression is strength.<br/><br/>
      If adults constantly disappointed you, you might teach your friends not to trust anyone.<br/><br/>
      If you had to become independent too early, you might convince someone else that needing people is weakness.
    </p>

    <p>And none of that necessarily comes from cruelty.</p>

    <p><strong>Sometimes it comes from survival.</strong></p>

    <p>Sometimes the advice you give someone is the best advice you know how to give.</p>

    <p>It just isn’t good advice.</p>

    <p>
      I’ve written before about how much of who we become is shaped before we even realize it in
      <a href="/blog/breaking-patterns-personal-growth" style="color:#7c3aed; text-decoration:none; font-weight:600;">
        <em> Breaking Patterns: The Moment You Realize You Can Choose Differently</em>
      </a>.
      We learn ways to react, cope, love, protect ourselves, and survive long before we have words for any of it.
    </p>


    <h2>Confidence Can Look a Lot Like Chaos</h2>

    <p>I can understand why someone might have looked up to me when I was younger.</p>

    <p>I was loud.</p>

    <p>I had opinions.</p>

    <p>I wasn’t afraid to challenge people.</p>

    <p>I would defend someone I cared about without thinking twice.</p>

    <p>I didn’t always follow the rules just because someone told me they were the rules.</p>

    <p>To another kid, those things can look like confidence.</p>

    <p>And some of them <em>were</em> confidence.</p>

    <p>But adulthood has taught me that qualities we admire can become destructive when we don’t know how to regulate them.</p>

    <p style="text-align:center; line-height:2; margin:2rem 0;">
      <strong>
        Courage without judgment can become recklessness.<br/><br/>
        Loyalty without boundaries can become enabling.<br/><br/>
        Independence without support can become isolation.<br/><br/>
        Honesty without emotional regulation can become cruelty.<br/><br/>
        Standing up for yourself without conflict resolution skills can become aggression.
      </strong>
    </p>

    <p>Being fearless can sometimes just mean you haven’t learned to recognize danger yet.</p>

    <p>At fifteen, sixteen, seventeen years old, you don't know the difference.</p>

    <p>You just know what works.</p>

    <p><em>Or at least what feels like it works.</em></p>


    <h2>Survival Skills Aren't Always Life Skills</h2>

    <p>This might be the biggest thing I have learned as an adult.</p>

    <p><strong>Some of the behaviors we eventually have to unlearn were once incredibly useful to us.</strong></p>

    <p>Maybe being hyper independent protected you from being disappointed.</p>

    <p>Maybe anger helped you feel powerful when you actually felt helpless.</p>

    <p>Maybe humor helped you survive situations you weren't emotionally prepared to process.</p>

    <p>Maybe running away from conflict worked better than staying in a situation where you felt unsafe.</p>

    <p>Maybe becoming the loudest person in the room was the only way you knew how to make sure you weren't invisible.</p>

    <p>Those things can keep a kid moving.</p>

    <p class="blog-pullquote">
      <strong>But survival skills aren't always life skills.</strong>
    </p>

    <p>Eventually you grow up and realize the coping mechanism that protected you at fourteen might be destroying your relationships at thirty.</p>

    <p>And that realization is hard enough when you're thinking about yourself.</p>

    <p>It becomes even harder when you realize someone else may have learned those same behaviors from you.</p>

    <p>That is where accountability gets complicated.</p>

    <p>
      I’ve talked about another side of this in
      <a href="/blog/what-survival-mode-looks-like-when-youre-high-functioning" style="color:#7c3aed; text-decoration:none; font-weight:600;">
        <em>What Survival Mode Looks Like When You’re High Functioning</em>
      </a>.
      Survival does not always look like falling apart. Sometimes the behaviors that once kept us functioning become so normal that we mistake them for personality.
    </p>


    <h2>Intention Doesn't Erase Impact</h2>

    <p>I think we sometimes believe there are only two options.</p>

    <p>Either:</p>

    <p style="text-align:center;">
      <strong>“I meant well, so I did nothing wrong.”</strong>
    </p>

    <p>Or:</p>

    <p style="text-align:center;">
      <strong>“I hurt someone, so I must have been a terrible person.”</strong>
    </p>

    <p>But neither one feels true.</p>

    <p>I can know that my younger self loved people deeply.</p>

    <p>I can know that she was doing the best she could with the emotional tools she had.</p>

    <p>And I can also acknowledge that some of the things she modeled probably weren't healthy.</p>

    <p class="blog-pullquote">
      <strong>Both can exist at the same time.</strong>
    </p>

    <p>Good intention does not erase impact.</p>

    <p>But impact doesn't erase intention either.</p>

    <p>Accountability doesn't require me to hate the kid I used to be.</p>

    <p><strong>It just requires me to be honest about her.</strong></p>

    <p>
      That difference between what we <em>mean</em> and what another person actually <em>feels</em> from us is something I’ve wrestled with before in
      <a href="/blog/when-your-childs-reaction-triggers-your-past" style="color:#7c3aed; text-decoration:none; font-weight:600;">
        <em>When Your Child’s Reaction Triggers Your Past</em>
      </a>.
      Intention matters. But it is not the only thing that matters.
    </p>


    <h2>Maybe I Was Giving People Survival Skills</h2>

    <p>The thought I keep coming back to is this:</p>

    <blockquote style="border-left: 4px solid #7c3aed; padding-left: 1rem; margin: 2rem 0; font-style: italic; color: #4b5563; line-height: 1.8; font-size:1.1rem;">
      <strong>Maybe I was giving people survival skills when none of us realized they were survival skills.</strong>
    </blockquote>

    <p>Maybe I thought I was teaching someone confidence when I was actually teaching them defensiveness.</p>

    <p>Maybe I thought I was teaching someone independence when I was teaching them not to ask for help.</p>

    <p>Maybe I thought I was teaching someone to stand up for themselves when I hadn't yet learned that not every disagreement has to become a battle.</p>

    <p>Maybe I thought loyalty meant standing beside someone no matter what.</p>

    <p>Maybe I didn't understand yet that real loyalty sometimes means telling someone they're wrong.</p>

    <p>And when I look at it that way, I don't feel the need to defend everything I did.</p>

    <p>But I also don't feel the need to condemn the child who did it.</p>

    <p>She didn't have the vocabulary I have now.</p>

    <p>She didn't have the perspective I have now.</p>

    <p>She didn't have decades of hindsight.</p>

    <p><strong>She was learning while she was teaching other people.</strong></p>

    <p>Just like they were learning from her.</p>


    <h2>The People We Looked Up To Were Growing Too</h2>

    <p>There is something strangely comforting about realizing this applies to almost everyone.</p>

    <p>The older sibling you idolized.</p>

    <p>The older cousin.</p>

    <p>The cool teenager down the street.</p>

    <p>The friend who seemed fearless.</p>

    <p>The person you thought had everything figured out.</p>

    <p><strong>They probably didn't.</strong></p>

    <p>They were probably making it up as they went.</p>

    <p>Maybe they were only two years older than you.</p>

    <p>Maybe they were drowning in things you knew nothing about.</p>

    <p>Maybe the traits you admired most were adaptations they developed because they had to.</p>

    <p>We tend to remember childhood in roles.</p>

    <p style="text-align:center; line-height:2;">
      The good kid.<br/>
      The troublemaker.<br/>
      The quiet one.<br/>
      The wild one.<br/>
      The smart one.<br/>
      <strong>The bad influence.</strong>
    </p>

    <p>But adulthood has made me suspicious of those labels.</p>

    <p>Children are much more complicated than the roles adults assign them.</p>

    <p>Sometimes the “bad kid” was hurting.</p>

    <p>Sometimes the “wild kid” had never been taught boundaries.</p>

    <p>Sometimes the “angry kid” had very good reasons to be angry.</p>

    <p class="blog-pullquote">
      <strong>Sometimes the kid everyone else followed had absolutely no idea where she was going.</strong>
    </p>


    <h2>I Can Be Sorry Without Being Ashamed</h2>

    <p>There are things I would do differently now.</p>

    <p>There are things I would tell my younger self.</p>

    <p>There are ways I would handle conflict differently.</p>

    <p>Ways I would protect people differently.</p>

    <p>Ways I would love people differently.</p>

    <p>I can look back and think:</p>

    <p style="text-align:center; font-size:1.15rem;">
      <strong>Yeah.<br/><br/>That probably wasn't great.</strong>
    </p>

    <p>And I can mean that without turning my younger self into a villain.</p>

    <blockquote style="border-left: 4px solid #7c3aed; padding-left: 1rem; margin: 2rem 0; font-style: italic; color: #4b5563; line-height: 1.8;">
      <strong>I can be sorry for what I modeled without being ashamed of the child who didn't know another way.</strong>
    </blockquote>

    <p>Because growth shouldn't require us to hate every previous version of ourselves.</p>

    <p>It should require us to learn from them.</p>


    <h2>Keep the Fire. Learn Better Tools.</h2>

    <p>The goal isn't to erase everything about who we were.</p>

    <p>I don't want to become less passionate.</p>

    <p>Less protective.</p>

    <p>Less outspoken.</p>

    <p>Less willing to challenge something I believe is wrong.</p>

    <p><strong>I don't want to trade fire for obedience.</strong></p>

    <p>I just want better tools.</p>

    <p style="text-align:center; line-height:2; margin:2rem 0;">
      <strong>
        Courage with judgment.<br/><br/>
        Loyalty with boundaries.<br/><br/>
        Independence that still knows how to ask for help.<br/><br/>
        Honesty with compassion.<br/><br/>
        Anger that knows what to do with itself.<br/><br/>
        Strength that doesn't require destruction.
      </strong>
    </p>

    <p>Maybe that's what growing up really is.</p>

    <p>Not becoming an entirely different person.</p>

    <p>Just learning how to carry the same parts of yourself in healthier ways.</p>

    <br/>

    <p>So yes.</p>

    <p>Maybe somebody looked up to me.</p>

    <p>And maybe I was a bad influence sometimes.</p>

    <p><strong>Those two things can both be true.</strong></p>

    <p>But there is one more thing that is true now.</p>

    <p class="blog-ending" style="font-size:1.2rem;">
      <strong>The kid they looked up to was just a kid too.</strong>
    </p>

    <p class="blog-ending"><strong>And she was still learning.</strong></p>

    <p style="margin-top:3rem;">— Jen</p>

  `
},
{
  slug: "inherited-weather-the-stories-behind-my-first-album",

  title: "Inherited Weather: The Stories Behind My First Album",

  date: "2026-09-22",

  excerpt:
    "My first album, Inherited Weather: Pt. 1, is finally here. These songs hold pieces of my childhood, my family, love, trauma, survival, dance, healing, and the person I became through all of it.",

  featuredImage:
    "/images/uploads/inherited-weather-blog-banner.png",

  tags: [
    "Music",
    "Inherited Weather",
    "Songwriting",
    "Healing",
    "Personal"
  ],

  seo: {
    title:
      "Inherited Weather: Stories Behind My First Album | Jennifer Kropke",

    description:
      "Jennifer Kropke shares the stories behind her first album, Inherited Weather: Pt. 1, including the meaning behind each song and reflections on family, love, trauma, dance, survival, healing, and identity.",

    keywords: [
      "Jennifer Kropke",
      "Inherited Weather",
      "Inherited Weather Pt. 1",
      "Jennifer Kropke music",
      "Jennifer Kropke album",
      "Jennifer Kropke singer songwriter",
      "Inherited Weather album",
      "Inherited Weather songs",
      "stories behind the songs",
      "meaning behind Inherited Weather",
      "song meanings",
      "independent musician",
      "independent artist",
      "Chicago singer songwriter",
      "female singer songwriter",
      "personal songwriting",
      "healing through music",
      "trauma and songwriting",
      "Still Here Jennifer Kropke",
      "In 8 Counts Jennifer Kropke",
      "My Shame Jennifer Kropke",
      "The Endless Powers of Me",
      "Here I Am Untrue",
      "Fire and Glitter",
      "The Ways We Cracked",
      "Bleed In Stereo"
    ],

    canonical:
      "https://jenniferkropke.com/blog/inherited-weather-the-stories-behind-my-first-album",

    ogTitle:
      "Inherited Weather: The Stories Behind My First Album",

    ogDescription:
      "Go behind the songs of Jennifer Kropke's first album, Inherited Weather: Pt. 1 — a deeply personal collection about family, love, survival, identity, trauma, dance, and healing.",

    ogImage:
      "/images/uploads/inherited-weather-album.png"
  },

  content: `
    <p>
      On September 18, 2026, I released my first album,
      <strong><em>Inherited Weather: Pt. 1</em></strong>.
    </p>

    <p>It still feels strange to type that.</p>

    <p><strong>My first album.</strong></p>

    <p>
      These songs were not written all at once. Some of them began with
      words and feelings I carried when I was much younger. Others came
      from looking backward with the perspective I have now. Together,
      they became a story about family, love, relationships, trauma,
      survival, identity, healing, and the things we inherit from the
      people and experiences that shape us.
    </p>

    <p>
      Earlier this year, when I wrote
      <a href="/blog/inherited-weather-introduction">
        Inherited Weather: Why I’m Finally Sharing My Story
      </a>,
      this album was still something I was preparing to put into the
      world. Now it is actually here.
    </p>

    <p>
      I could probably write an entire blog about every song on this
      album, and maybe someday I will. For now, I wanted to share a
      little bit about what each one means to me.
    </p>

    <p>
      You can listen to the album while you read. The four interludes
      are part of the full album experience, but for this blog I am
      focusing on the eleven full songs and the stories behind them.
    </p>

    <div style="margin:32px 0;">
      <iframe
        style="border-radius:12px;"
        src="https://open.spotify.com/embed/album/3TiuLJZ6KD0UWWoyWypbgu"
        width="100%"
        height="352"
        frameborder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>

    <p style="text-align:center;margin:24px 0 40px;">
      <a
        href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
        target="_blank"
        rel="noopener noreferrer"
        style="font-weight:700;"
      >
        🎧 Open Inherited Weather: Pt. 1 on Spotify
      </a>
    </p>


    <h2>
      <a
        href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
        target="_blank"
        rel="noopener noreferrer"
        style="color:inherit;text-decoration:none;"
      >
        Here I Am Untrue
      </a>
    </h2>

    <a
      href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/images/uploads/here-i-am-untrue.jpg"
        alt="Childhood family photo for Here I Am Untrue by Jennifer Kropke"
        style="width:100%;height:auto;border-radius:10px;"
      />
    </a>

    <p style="text-align:center;font-size:0.95rem;margin-top:10px;">
      <a
        href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
        target="_blank"
        rel="noopener noreferrer"
      >
        🎧 Listen to “Here I Am Untrue” on Spotify
      </a>
    </p>

    <p>
      <em>Here I Am Untrue</em> looks back at the home I grew up in and
      the complicated relationship my parents had during those years.
      Alcohol played a significant role in our family, and there were
      moments of fighting, instability, and chaos that I was too young
      to fully understand.
    </p>

    <p>
      But this song is not about blaming my parents or painting them as
      villains. They aren't. They are two imperfect people who have
      loved me, inspired me, and shaped an enormous part of who I am.
      Growing up meant eventually realizing that our parents are human
      too. They have their own struggles, their own histories, their
      own mistakes, and their own ways of surviving.
    </p>

    <p>
      That is one reason I chose this photograph. There is genuine
      happiness in it. Those smiles are real. The difficult memories
      are real too. One does not erase the other.
    </p>

    <blockquote>
      “Tomorrow brings a phony smile<br/>
      Mom plays pretend for just a while.”
    </blockquote>

    <p>
      Another lyric became especially meaningful to me as I got older:
    </p>

    <blockquote>
      “Apples don’t fall far from trees<br/>
      It must be true from what I see.”
    </blockquote>

    <p>
      <em>Inherited Weather</em> is partly about recognizing the things
      we inherit from the people who raised us, both beautiful and
      painful, and deciding what we want to do with them. I can
      acknowledge the storms that existed in my childhood while still
      loving, respecting, and being inspired by the people who helped
      make me who I am.
    </p>


    <h2>
      <a
        href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
        target="_blank"
        rel="noopener noreferrer"
        style="color:inherit;text-decoration:none;"
      >
        Fire &amp; Glitter
      </a>
    </h2>

    <a
      href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/images/uploads/fire-and-glitter.jpg"
        alt="Childhood photo with my mom for Fire and Glitter by Jennifer Kropke"
        style="width:100%;height:auto;border-radius:10px;"
      />
    </a>

    <p style="text-align:center;font-size:0.95rem;margin-top:10px;">
      <a
        href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
        target="_blank"
        rel="noopener noreferrer"
      >
        🎧 Listen to “Fire &amp; Glitter” on Spotify
      </a>
    </p>

    <p>My mom was my first hero.</p>

    <p>
      <em>Fire &amp; Glitter</em> is about the complicated reality of
      growing up and realizing that the person you idolized as a child
      is also human. When I was little, my mom was larger than life to
      me. She was funny, energetic, strong, and the person who made me
      feel safe. Some of my happiest childhood memories are tied to her.
    </p>

    <blockquote>
      “She was fire and glitter<br/>
      Laughter cracking ceilings wide.”
    </blockquote>

    <p>
      As I got older, our relationship became more complicated.
      Alcohol, choices I did not understand, my own rebellion, and
      eventually learning things I had been too young to recognize
      changed the way I saw her.
    </p>

    <p>
      Adulthood gave me something I did not have when I was younger:
      perspective.
    </p>

    <p>
      I can see her mistakes without allowing those mistakes to define
      her. I can recognize the ways we hurt each other while also
      recognizing everything she gave me. Loving someone does not
      require pretending they never got anything wrong.
    </p>

    <blockquote>
      “She is still fire and glitter<br/>
      Still the first hands holding me<br/>
      Still the woman who built my world<br/>
      Even imperfectly.”
    </blockquote>

    <p>And maybe the simplest lyric says the most:</p>

    <blockquote>
      “She’s still my first<br/>
      Home.”
    </blockquote>

    <p>
      Before I understood any of the complicated parts, this was my
      mom. And this was home.
    </p>


    <h2>
      <a
        href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
        target="_blank"
        rel="noopener noreferrer"
        style="color:inherit;text-decoration:none;"
      >
        The Ways We Cracked
      </a>
    </h2>

    <a
      href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/images/uploads/the-ways-we-cracked.png"
        alt="Childhood photo with my brother for The Ways We Cracked by Jennifer Kropke"
        style="width:100%;height:auto;border-radius:10px;"
      />
    </a>

    <p style="text-align:center;font-size:0.95rem;margin-top:10px;">
      <a
        href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
        target="_blank"
        rel="noopener noreferrer"
      >
        🎧 Listen to “The Ways We Cracked” on Spotify
      </a>
    </p>

    <p>
      My brother and I grew up in the same house. We heard the same
      arguments, lived through many of the same difficult moments, and
      loved the same parents. But as we got older, it became clear that
      those experiences did not shape us in the same way.
    </p>

    <p><em>The Ways We Cracked</em> is about that difference.</p>

    <p>
      I became loud. I learned to fill rooms, chase connection, say
      what I was feeling, sometimes say too much, and desperately want
      to be seen. My brother responded differently. He became quieter
      and more internal. We were two kids trying to make sense of
      things we did not yet have the words to understand, each
      developing our own way of coping.
    </p>

    <blockquote>
      “We grew up in the same house, same scars<br/>
      Same nights counting cracks in the dark<br/>
      But it split us into different kinds of broken<br/>
      Different ways of coping.”
    </blockquote>

    <p>
      I love this childhood picture because neither of those children
      could possibly understand any of that yet. We are just a brother
      and sister with our arms around each other, smiling at the camera.
    </p>

    <p>
      There is no blame in this song, toward him or toward our parents.
      There is actually a lot of empathy in it. As an adult, I can look
      at my brother and realize that just because he carried something
      differently does not mean he did not carry it.
    </p>

    <blockquote>
      “Did you hear it like I did<br/>
      Or did you just learn to forget?”
    </blockquote>

    <p>Same blood. Same past. Different ways we cracked.</p>


    <h2>
      <a
        href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
        target="_blank"
        rel="noopener noreferrer"
        style="color:inherit;text-decoration:none;"
      >
        In 8 Counts
      </a>
    </h2>

    <a
      href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/images/uploads/in-8-counts.jpg"
        alt="Dance performance photo for In 8 Counts by Jennifer Kropke"
        style="width:100%;height:auto;border-radius:10px;"
      />
    </a>

    <p style="text-align:center;font-size:0.95rem;margin-top:10px;">
      <a
        href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
        target="_blank"
        rel="noopener noreferrer"
      >
        🎧 Listen to “In 8 Counts” on Spotify
      </a>
    </p>

    <p>Dance has never been just a hobby for me.</p>

    <p>
      <em>In 8 Counts</em> is about the place movement has held in my
      life, especially during the times when I did not know what else
      to do with everything I was feeling. When life felt loud,
      unpredictable, or painful, dance gave me something I could
      control. There was always another count. Another step. Another
      piece of choreography to learn.
    </p>

    <blockquote>
      “But in my room the music<br/>
      Was louder than the fight.”
    </blockquote>

    <p>
      As I got older, I kept returning to movement through different
      kinds of pain. Fear could become movement. Anger could become
      movement. Heartbreak could become movement.
    </p>

    <p>Dance gave all of it somewhere to go.</p>

    <blockquote>
      “Every eight counts keeps me breathing<br/>
      Every bruise proves I survived.”
    </blockquote>

    <p>
      When I look at this photograph, I don't just see myself
      performing. I see one of the places where I learned how powerful
      my own body could be. Dance taught me that even when I could not
      control what was happening around me, I could still choose what
      happened on the next count.
    </p>

    <blockquote>
      “Every scar rewrites the lie<br/>
      You can’t break a girl<br/>
      Who learned to fly.”
    </blockquote>

    <p>
      I wasn't only learning choreography. In a lot of ways, I was
      learning how to survive.
    </p>


    <h2>
      <a
        href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
        target="_blank"
        rel="noopener noreferrer"
        style="color:inherit;text-decoration:none;"
      >
        My Shame
      </a>
    </h2>

    <a
      href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/images/uploads/my-shame.jpg"
        alt="Photo from the period of my life that inspired My Shame by Jennifer Kropke"
        style="width:100%;height:auto;border-radius:10px;"
      />
    </a>

    <p style="text-align:center;font-size:0.95rem;margin-top:10px;">
      <a
        href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
        target="_blank"
        rel="noopener noreferrer"
      >
        🎧 Listen to “My Shame” on Spotify
      </a>
    </p>

    <p>
      <em>My Shame</em> is one of the oldest pieces of myself on this
      album. It comes from being young and caught in a relationship
      where love, hurt, longing, rejection, and dependency became so
      tangled together that I could no longer separate one from
      another.
    </p>

    <p>
      I knew things were unhealthy. I knew I was being hurt. But
      knowing that did not magically make the attachment disappear.
    </p>

    <blockquote>
      “Yet my heart still bleeds your name.”
    </blockquote>

    <p>
      There is a lyric in this song that is deliberately uncomfortable:
    </p>

    <blockquote>
      “I miss the way you kiss me<br/>
      And I miss the way you hit me.”
    </blockquote>

    <p>
      That contradiction is really the heart of <em>My Shame</em>.
      It captures how confusing an unhealthy relationship can become
      when the person causing you pain is also the person you
      desperately want comfort from. At that age, I did not have the
      perspective or language I have now. I only knew that I loved
      someone, I was hurting, and somehow I kept wanting the person
      connected to that hurt to make it better.
    </p>

    <p>
      I chose this picture because this is me during that chapter of my
      life, before hindsight could make any of it clearer. I was young,
      trying to understand relationships, wanting to be wanted, and
      carrying far more complicated feelings about love than I
      understood at the time. Even the caption on the photo feels like
      a little time capsule of who I was then.
    </p>

    <p>
      Shame makes us want to hide the parts of our stories that are
      messy, contradictory, or difficult to explain. Releasing this
      song all these years later does the opposite. I don't have to
      hide that girl or judge her for what she thought love was
      supposed to feel like.
    </p>

    <p>
      She was trying to understand love with the tools she had at the
      time.
    </p>


    <h2>
      <a
        href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
        target="_blank"
        rel="noopener noreferrer"
        style="color:inherit;text-decoration:none;"
      >
        Let’s Restart
      </a>
    </h2>

    <a
      href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/images/uploads/lets-restart.jpg"
        alt="Photo from the period of my life that inspired Let's Restart by Jennifer Kropke"
        style="width:100%;height:auto;border-radius:10px;"
      />
    </a>

    <p style="text-align:center;font-size:0.95rem;margin-top:10px;">
      <a
        href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
        target="_blank"
        rel="noopener noreferrer"
      >
        🎧 Listen to “Let’s Restart” on Spotify
      </a>
    </p>

    <p>
      <em>Let’s Restart</em> is about knowing a relationship is hurting
      you and still wishing you could somehow go back and make it work.
    </p>

    <p>
      There is a strange place between heartbreak and acceptance where
      you know better, but your emotions have not caught up yet. You
      can be getting stronger, moving forward, even convincing yourself
      that you are finally done, and then one look, one conversation,
      or one memory brings everything rushing back.
    </p>

    <blockquote>
      “I’ve started to get stronger,<br/>
      But after just one look at you<br/>
      Makes me fall apart and it all restarts.”
    </blockquote>

    <p>
      This song has anger in it too. There is jealousy, resentment,
      sadness, and that very young feeling of wanting someone back at
      the exact same time you want to hate them for what they did to
      you. It isn't meant to present a healthy version of love. It
      captures what it actually felt like while I was inside that
      cycle.
    </p>

    <blockquote>
      “Your broken words struck my broken heart,<br/>
      And now I’m stuck here falling apart<br/>
      Baby, Let’s restart.”
    </blockquote>

    <p>
      I chose this picture because I wanted the image beside the song
      to show the girl who actually wrote and felt these things, not
      the adult version of me explaining them years later.
    </p>

    <p>
      I look at these old pictures now and know everything she does not
      know yet. I know which relationships will end, which wounds will
      eventually heal, and how dramatically her understanding of love
      will change.
    </p>

    <p>But she didn't know any of that yet.</p>


    <h2>
      <a
        href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
        target="_blank"
        rel="noopener noreferrer"
        style="color:inherit;text-decoration:none;"
      >
        I Am
      </a>
    </h2>

    <a
      href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/images/uploads/i-am.jpg"
        alt="Photo representing identity and self perception for I Am by Jennifer Kropke"
        style="width:100%;height:auto;border-radius:10px;"
      />
    </a>

    <p style="text-align:center;font-size:0.95rem;margin-top:10px;">
      <a
        href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
        target="_blank"
        rel="noopener noreferrer"
      >
        🎧 Listen to “I Am” on Spotify
      </a>
    </p>

    <p>
      <em>I Am</em> is about trying to figure out who I am when so many
      different versions of me seem to exist at the same time.
    </p>

    <p>
      This song, along with <em>My Shame</em> and
      <em>Let’s Restart</em>, came from the same relationship and the
      person I was becoming while I was inside it.
    </p>

    <p>
      For a long time, I think I felt like I needed to fit neatly into
      one definition. Good or bad. Strong or damaged. Confident or
      insecure. Sexual or innocent. Angry or loving. But human beings
      don't really work that way, and neither do I.
    </p>

    <blockquote>
      “I am pain<br/>
      I am love<br/>
      I am everything you fear<br/>
      And everything you crave.”
    </blockquote>

    <p>
      There are parts of myself I am proud of and parts I am still
      learning to understand. There are things that happened to me,
      choices I made, expectations placed on me, and labels other
      people tried to give me. None of those things, individually, get
      to define the whole person.
    </p>

    <p>
      That is why I love this particular picture for the song. Even
      the words across the top, “beauty is in the eyes of the
      beholder,” feel connected to the person I was becoming. Beauty,
      identity, worth, and even the idea of who we are can look
      completely different depending on who is doing the looking.
    </p>

    <blockquote>
      “I am not your expectation<br/>
      Not your label, not your blame<br/>
      I am not your quiet woman<br/>
      I am not your tame.”
    </blockquote>

    <p>
      Eventually, the song stops asking for permission to contain all
      of those contradictions.
    </p>

    <blockquote>
      “I am everything unfinished<br/>
      Everything becoming flame.”
    </blockquote>

    <p>I am not one thing. I never was.</p>


    <h2>
      <a
        href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
        target="_blank"
        rel="noopener noreferrer"
        style="color:inherit;text-decoration:none;"
      >
        Bleed In Stereo
      </a>
    </h2>

    <a
      href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/images/uploads/bleed-in-stereo.jpg"
        alt="Photo from the period of my life represented in Bleed In Stereo by Jennifer Kropke"
        style="width:100%;height:auto;border-radius:10px;"
      />
    </a>

    <p style="text-align:center;font-size:0.95rem;margin-top:10px;">
      <a
        href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
        target="_blank"
        rel="noopener noreferrer"
      >
        🎧 Listen to “Bleed In Stereo” on Spotify
      </a>
    </p>

    <p>
      <em>Bleed In Stereo</em> is about the kind of love that becomes
      all consuming. The kind where another person stops being part of
      your world and slowly starts becoming your entire world.
    </p>

    <p>
      It is about giving someone so much of yourself that when the
      relationship begins to fall apart, you don't just feel like
      you're losing them. You feel like you're losing yourself too.
    </p>

    <blockquote>
      “I gave you all my oxygen<br/>
      You gave me just enough to drown.”
    </blockquote>

    <p>
      There is desperation in this song because that is what this kind
      of heartbreak felt like. I had built so much of my emotional
      world around another person that I couldn't understand how
      something that once felt so enormous could suddenly mean so
      little to them.
    </p>

    <blockquote>
      “I built my heart around your name<br/>
      You tore it down without a sound.”
    </blockquote>

    <p>
      But <em>Bleed In Stereo</em> is not only about being destroyed
      by love. Buried underneath all of that heartbreak is the
      beginning of something I did not recognize at the time:
      rebuilding.
    </p>

    <blockquote>
      “I’ll find my beauty in the breakdown.”
    </blockquote>

    <p>
      I chose this picture because it captures me during an era when
      so much of my identity and self worth was still tied to being
      wanted, being loved, and being enough for someone else.
    </p>

    <p>
      Looking at her now, I know something she hadn't figured out yet.
      Losing someone else did not have to mean losing me.
    </p>


    <h2>
      <a
        href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
        target="_blank"
        rel="noopener noreferrer"
        style="color:inherit;text-decoration:none;"
      >
        Ignorant
      </a>
    </h2>

    <a
      href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/images/uploads/ignorant.jpg"
        alt="Photo representing the period of my life that inspired Ignorant by Jennifer Kropke"
        style="width:100%;height:auto;border-radius:10px;"
      />
    </a>

    <p style="text-align:center;font-size:0.95rem;margin-top:10px;">
      <a
        href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
        target="_blank"
        rel="noopener noreferrer"
      >
        🎧 Listen to “Ignorant” on Spotify
      </a>
    </p>

    <p>
      <em>Ignorant</em> came after that relationship ended.
    </p>

    <p>
      By then, I wasn't only angry at one person anymore. I was
      carrying everything that relationship had left behind while also
      having new experiences with men that gave that anger somewhere
      else to land.
    </p>

    <p>
      I was hurt, frustrated, defensive, and increasingly cynical
      about men and relationships. Some of that anger was justified by
      what I was experiencing. Some of it was me taking everything I
      had been through and turning it into armor.
    </p>

    <p>This song is what that armor sounded like.</p>

    <blockquote>
      “You don’t lose women<br/>
      Because we’re hard to love<br/>
      You lose us<br/>
      Because you never grow up.”
    </blockquote>

    <p>
      I don't hear <em>Ignorant</em> today as a statement about every
      man. I hear a younger version of myself who had been hurt enough
      times that anger had become armor. I was learning to recognize
      behavior I didn't want to accept anymore, even if I hadn't yet
      figured out how to separate healthy boundaries from the walls I
      was building around myself.
    </p>

    <p>
      And underneath all of that anger was actually a very simple
      request:
    </p>

    <blockquote>
      “We were never asking for perfection<br/>
      Just honesty.”
    </blockquote>

    <p>
      Healing is not always graceful. Sometimes before you reach
      understanding, you get angry.
    </p>


    <h2>
      <a
        href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
        target="_blank"
        rel="noopener noreferrer"
        style="color:inherit;text-decoration:none;"
      >
        Still Here
      </a>
    </h2>

    <a
      href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/images/uploads/still-here.jpg"
        alt="Photo representing the story behind Still Here by Jennifer Kropke"
        style="width:100%;height:auto;border-radius:10px;"
      />
    </a>

    <p style="text-align:center;font-size:0.95rem;margin-top:10px;">
      <a
        href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
        target="_blank"
        rel="noopener noreferrer"
      >
        🎧 Listen to “Still Here” on Spotify
      </a>
    </p>

    <p><em>Still Here</em> is about surviving sexual assault.</p>

    <p>
      For a long time, one of the hardest parts for me to understand
      was my own response to what happened. We often imagine survival
      as fighting, screaming, running, doing something. But sometimes
      survival looks like becoming still. Sometimes your mind goes
      somewhere else because your body cannot.
    </p>

    <blockquote>
      “Stillness isn’t weakness<br/>
      It’s survival wearing thin.”
    </blockquote>

    <p>
      There were questions I carried afterward. Questions about what I
      did or didn't do. Whether I fought enough. Whether freezing meant
      something that it didn't. Whether what happened somehow became
      mine to carry as shame.
    </p>

    <p>
      Writing this song meant finally giving myself a different answer.
    </p>

    <blockquote>
      “Now I know the body chooses<br/>
      How to live through what it’s in.”
    </blockquote>

    <p>
      I wrote more about why I chose metaphor to tell this story in
      <a href="/blog/writing-still-here-songwriting-trauma-metaphor">
        Writing Still Here: When Metaphor Says What Literal Words Cannot
      </a>.
      This song needed to tell the truth without turning the most
      painful experience into spectacle.
    </p>

    <p>
      I chose this photograph because I wanted the person beside this
      song to be me from that period of my life, not a symbolic image
      of what happened. I look at her now knowing things she could not
      possibly have understood then.
    </p>

    <p>
      I don't see weakness when I look at her. I see someone who
      survived.
    </p>

    <blockquote>
      “I am not untouched<br/>
      But I am not undone.”
    </blockquote>

    <p>
      Not untouched. Not unchanged. But still here.
    </p>


    <h2>
      <a
        href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
        target="_blank"
        rel="noopener noreferrer"
        style="color:inherit;text-decoration:none;"
      >
        The Endless Powers of Me
      </a>
    </h2>

    <a
      href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/images/uploads/the-endless-powers-of-me.jpg"
        alt="Photo representing The Endless Powers of Me by Jennifer Kropke"
        style="width:100%;height:auto;border-radius:10px;"
      />
    </a>

    <p style="text-align:center;font-size:0.95rem;margin-top:10px;">
      <a
        href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
        target="_blank"
        rel="noopener noreferrer"
      >
        🎧 Listen to “The Endless Powers of Me” on Spotify
      </a>
    </p>

    <p>
      <em>The Endless Powers of Me</em> is the conclusion to this part
      of the story.
    </p>

    <p>
      For so much of my life, I think I imagined power as the ability
      to escape. If I could disappear, fly away, erase the pain,
      rewrite the past, or somehow become completely untouchable, then
      maybe I would finally be powerful.
    </p>

    <blockquote>
      “If I could I’d fly away<br/>
      Soar my wings beyond this place.”
    </blockquote>

    <p>
      As the song grows, those imagined powers get bigger. Fire,
      oceans, wind, the ability to erase scars and accelerate healing.
      I wanted the power to undo things that cannot actually be undone.
    </p>

    <p>
      But eventually the song reaches the realization that became the
      heart of the entire album.
    </p>

    <p>Maybe I already had the power I kept wishing for.</p>

    <blockquote>
      “Maybe flying isn’t leaving<br/>
      Maybe it’s standing tall<br/>
      Maybe endless power<br/>
      Is surviving it all.”
    </blockquote>

    <p>
      Power isn't having a life where nothing hurts you. It isn't being
      able to erase the past or magically heal every scar. Sometimes
      power is simply still being here after everything that was
      supposed to knock you down and deciding that what happened before
      does not get to write everything that happens next.
    </p>

    <p>
      That realization connects to something I have written about
      throughout this year:
      <a href="/blog/breaking-patterns-personal-growth">
        breaking patterns and realizing we can choose differently
      </a>.
      We cannot rewrite where we came from, but we do get a say in what
      we carry forward.
    </p>

    <p>
      I chose this picture because I see strength when I look at her.
      Not the imaginary, invincible kind of strength I used to think I
      needed. I see a woman who had already lived through so many of
      the stories told across <em>Inherited Weather</em>, even if she
      had not yet understood what all of them meant.
    </p>


    <h2>The Weather I Inherited</h2>

    <p>
      When I look at these eleven songs together, I don't see eleven
      separate stories anymore.
    </p>

    <p>
      I see a little girl watching her family and trying to understand
      the adults around her. I see a daughter who idolized her mother
      and eventually learned that loving someone and seeing their flaws
      can exist at the same time. I see a sister realizing that two
      children can survive the same house in completely different ways.
    </p>

    <p>
      I see a dancer finding somewhere to put everything she couldn't
      say.
    </p>

    <p>
      I see a young woman confusing pain with love, losing pieces of
      herself inside relationships, getting angry, surviving things she
      never should have had to survive, and slowly figuring out who she
      was underneath all of it.
    </p>

    <p>And I see the woman writing this now.</p>

    <p>
      I have written before about
      <a href="/blog/breaking-patterns-personal-growth">
        the moment you realize you can choose differently
      </a>.
      I think that idea lives at the center of this album.
    </p>

    <p>
      We inherit things from the people who came before us. Love.
      Strength. Humor. Fear. Coping mechanisms. Traditions. Wounds.
      Resilience. Sometimes we inherit things we want to keep forever.
      Sometimes we inherit things we eventually realize need to end
      with us.
    </p>

    <p>That is <em>Inherited Weather</em> to me.</p>

    <p>I couldn't change the weather I inherited.</p>

    <p>But I survived every storm.</p>

    <p>
      And somewhere along the way, I realized that was a power of its
      own.
    </p>

    <p>
      Thank you to everyone who has listened, shared a song, watched a
      video, read one of these blogs, or simply allowed me to tell this
      story in my own way.
    </p>

    <p><strong>This is only Part I.</strong></p>

    <div style="margin:32px 0;">
      <iframe
        style="border-radius:12px;"
        src="https://open.spotify.com/embed/album/3TiuLJZ6KD0UWWoyWypbgu"
        width="100%"
        height="352"
        frameborder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>

    <p style="text-align:center;margin:24px 0 32px;">
      <a
        href="https://open.spotify.com/album/3TiuLJZ6KD0UWWoyWypbgu"
        target="_blank"
        rel="noopener noreferrer"
        style="font-weight:700;font-size:1.1rem;"
      >
        🎧 Listen to Inherited Weather: Pt. 1 on Spotify
      </a>
    </p>

    <p>— Jen</p>
  `
}
  
];

// Helper function to get a post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

// Helper function to get all posts sorted by date (newest first)
export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
