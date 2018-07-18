'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eligibleTitles = exports.titles = exports.categoryColorScale = exports.totalPointsFromMilestoneMap = exports.categoryPointsFromMilestoneMap = exports.categoryIds = exports.trackIds = exports.tracks = exports.maxLevel = exports.pointsToLevels = exports.milestoneToPoints = exports.milestones = undefined;

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _d = require('d3');

var d3 = _interopRequireWildcard(_d);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var milestones = exports.milestones = [0, 1, 2, 3, 4, 5];

var milestoneToPoints = exports.milestoneToPoints = function milestoneToPoints(milestone) {
  switch (milestone) {
    case 0:
      return 0;
    case 1:
      return 1;
    case 2:
      return 3;
    case 3:
      return 6;
    case 4:
      return 12;
    case 5:
      return 20;
    default:
      return 0;
  }
};

var pointsToLevels = exports.pointsToLevels = {
  '0': '1.1',
  '5': '1.2',
  '11': '1.3',
  '17': '2.1',
  '23': '2.2',
  '29': '2.3',
  '36': '3.1',
  '43': '3.2',
  '50': '3.3',
  '58': '4.1',
  '66': '4.2',
  '74': '4.3',
  '90': '5.1',
  '110': '5.2',
  '135': '5.3'
};

var maxLevel = exports.maxLevel = 135;

var tracks = exports.tracks = {
  "PRODUCT": {
    "displayName": "Product",
    "category": "A",
    "description": "Develops expertise in MongoDB products across platforms (Linux, Windows, Mobile, etc)",
    "milestones": [{
      "summary": "Works effectively with MongoDB products, following current best practices",
      "signals": ["Delivers features requiring simple modifications", "Adds to documentation", "Reuses existing components appropriately"],
      "examples": ["Added existing button to a different iOS surface", "Add follow button for publications on Android", "Fetched and displayed a new stream, using existing stream item styles"]
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": ["Defines new useful and appropriate proto-generated objects", "Creates simple new activities on Android", "Migrates code from old patterns to new patterns"],
      "examples": ["Upgraded SDWebImage to a new major version", "Added support for rendering a new type of stream item", "Prototyped a simple new feature quickly"]
    }, {
      "summary": "Designs major new features and demonstrates a nuanced understanding of PRODUCT platform constraints",
      "signals": ["Implements complex features with a large product surface area", "Works effectively with  Android reactive programming framework", "Adds support for new iOS features after a major iOS version upgrade"],
      "examples": ["Designed iOS caching strategy for offline reading", "Built series reader on Android", "Informed the team about recent best practice changes and deprecations"]
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": ["Pioneers architecture migration strategies that reduce programmer burden", "Fixes subtle memory management issues", "Implements interactive dismissals that bring delight"],
      "examples": ["Upgraded CocoaPods to a new major version", "Designed architecture for fetching and rendering stream items", "Migrated Android persistance layer to reactive programming"]
    }, {
      "summary": "Is an industry-leading expert in MongoDB products or sets strategic PRODUCT direction for an eng team",
      "signals": ["Defines long-term goals and ensures active projects are in service of them", "Designs and builds innovative, industry-leading UI interactions", "Invents new techniques to responsibly stretch limits of the Android platform"],
      "examples": ["Defined and drove complete migration plan to Swift or Kotlin", "Implemented Android recycler views before platform support existed", "Pioneered application-level abstractions for multi-app environment"]
    }]
  },
  "TOOLS": {
    "displayName": "Tools",
    "category": "A",
    "description": "Develops expertise in TOOLS product technologies, such as Go, Java, and JavaScript",
    "milestones": [{
      "summary": "Works effectively within established web client architectures, following current best practices",
      "signals": ["Makes minor modifications to existing screens", "Fixes simple design quality issues", "Uses CSS appropriately, following style guide"],
      "examples": ["Implemented sticky footer on the post page", "Hooked up the action to dismiss a post from a stream", "Built PaymentHistory screen using ResponseScreen"]
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": ["Makes sensible abstractions based on template and code patterns", "Specs and builds interactive components independently", "Prototypes simple new features quickly"],
      "examples": ["Built credit card input component", "Created shared buttons template", "Built modal system"]
    }, {
      "summary": "Designs major new features and demonstrates a nuanced understanding of browser constraints",
      "signals": ["Provides useful design feedback and suggests feasible alternatives", "Performs systemic tasks to significantly minimise bundle size", "Acts a caretaker for all of web client code"],
      "examples": ["Designed font loading strategy for MongoDB", "Researched utility of service workers for MongoDB", "Designed and implemented ResponseScreen"]
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": ["Pioneers architecture migrations that reduce programmer burden", "Implements complex UI transitions that bring delight", "Makes architectural decisions that eliminate entire classes of bugs"],
      "examples": ["Designed MongoDB's post morpher and delta system", "Implemented MongoDB's scrolling text over image blur", "Designed and pioneered proto-based model storage"]
    }, {
      "summary": "Is an industry-leading expert in web client or sets strategic web client direction for an eng team",
      "signals": ["Invents new techniques to innovate and overcome browser constraints", "Identifies and solved systemic problems with current architecture", "Defines a long-term vision for web client and ensures projects are in service of it"],
      "examples": ["Invented CSS in JS", "Defined and drove migration strategy to Lite", "Implemented unidirectional data flow to completion"]
    }]
  },
  "FOUNDATIONS": {
    "displayName": "Foundations",
    "category": "A",
    "description": "Develops expertise in foundational systems, such as deployments, pipelines, databases and machine learning",
    "milestones": [{
      "summary": "Works effectively within established structures, following current best practices",
      "signals": ["Writes thorough postmortems for service outages", "Makes simple configuration changes to services", "Performs backfills safely and effectively, without causing pages"],
      "examples": ["Made safe and effective Ansible changes", "Implemented new ETL pipelines based on existing ones", "Resolved out of disk errors independently"]
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": ["Made minor version upgrades to technologies", "Builds machine learning jobs within the ML framework", "Triages service issues correctly and independently"],
      "examples": ["Upgraded NodeJS from 8.0 to 8.1.1", "Built custom packages for RPMs", "Improved ETL efficiency by improving Dynamo to S3 loading"]
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "signals": ["Acts as primary maintainer for existing critical systems", "Designs moderately complex systems", "Makes major version upgrades to libraries"],
      "examples": ["Designed Ansible configuration management", "Built MongoDB's realtime stats pipeline", "Designed flexible framework for writing machine learning jobs"]
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": ["Designs complex projects that encompass multiple systems and technologies", "Demonstrates deep knowledge of foundational systems", "Introduces new databases and technologies to meet underserved needs"],
      "examples": ["Designed and built BBFD", "Designed AWS configuration management", "Introduced Kinesis and pioneered streaming events pipeline"]
    }, {
      "summary": "Is an industry-leading expert in foundational engineering or sets strategic foundational direction for an eng team",
      "signals": ["Designs transformational projects in service of long-term goals", "Defines the strategic vision for foundational work and supporting technologies", "Invents industry-leading techniques to solve complex problems"],
      "examples": ["Invented a novel ML technique that advanced the state of the art", "Defined and developed MongoDB's continuous delivery strategy", "Developed and implemented HA strategy"]
    }]
  },
  "DATABASE": {
    "displayName": "DATABASE",
    "category": "A",
    "description": "Develops expertise in DATABASE side engineering",
    "milestones": [{
      "summary": "Works effectively within established DATABASE side framework, following current best practices",
      "signals": ["Has engineering and programming foundational knowledge sufficient to understand and implement well scoped out features; Is learning about development best practices", "Has a basic understanding of what all components in their product are.", "Makes minor DATABASE changes to support client needs"],
      "examples": ["Added IFTTT trigger for new bookmark to MongoDB2", "Added delete audio route to Buggle", "Queried a Dynamo LSI appropriately"]
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": ["Assesses correctness and utility of existing code and avoids blind copy-pasting", "Generalizes code when appropriate", "Determines data needs from product requirements"],
      "examples": ["Identified need for new index on Dynamo", "Acted as caretaker for routes protos", "Updated Facebook API version and codebase dependencies"]
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "signals": ["Acts as primary maintainer for existing critical systems", "Integrates third party services effectively", "Writes playbooks for new service maintenance"],
      "examples": ["Implemented Google Auth login to MongoDB", "Implemented payments integration with Stripe", "Built Textshots DATABASE"]
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": ["Delivers complex systems that achieve their goals", "Avoids subtle architectural mistakes when considering new systems", "Makes appropriate buy vs build choices"],
      "examples": ["Designed MongoDB's ranked feed architecture", "Designed custom domains architecture", "Created Gotham framework for creating Go services"]
    }, {
      "summary": "Is an industry-leading expert in DATABASE side engineering or sets strategic DATABASE side direction for an eng team",
      "signals": ["Designs transformational projects of significant complexity and scope", "Makes decisions that have positive, long term, wide ranging consequences", "Identifies and solves systemic problems with current architecture"],
      "examples": ["Researched, vetted, and selected Go as MongoDB's statically typed language", "Defined microservices architecture and MongoDB2 migration plan", "Defined and implemented proprietary IP core to the company's success"]
    }]
  },
  "PROJECT_MANAGEMENT": {
    "displayName": "Project management",
    "category": "B",
    "description": "Delivers well-scoped programs of work that meet their goals, on time, to budget, harmoniously",
    "milestones": [{
      "summary": "Effectively delivers individual tasks",
      "signals": ["Estimates small tasks accurately", "Delivers tightly-scoped projects efficiently", "Writes effective technical specs outlining approach"],
      "examples": ["Wrote the technical spec for featured post images", "Delivered stream item support for email digests", "Delivered payment history dashboard"]
    }, {
      "summary": "Effectively delivers small personal projects",
      "signals": ["Performs research and considers alternative approaches", "Balances pragmatism and polish appropriately", "Defines and hits interim milestones"],
      "examples": ["Delivered promo editor", "Delivered audio uploading for web client", "Executed the recommends to claps backfill"]
    }, {
      "summary": "Effectively delivers projects through a small team",
      "signals": ["Delegates tasks to others appropriately", "Integrates business needs into project planning", "Chooses appropriate project management strategy based on context"],
      "examples": ["Ran project retro to assess improvement opportunities", "Completed launch checklist unprompted for well controlled rollout", "Facilitated project kickoff meeting to get buy-in"]
    }, {
      "summary": "Effectively delivers projects through a large team, or with a significant amount of stakeholders or complexity",
      "signals": ["Finds ways to deliver requested scope faster, and prioritizes backlog", "Manages dependencies on other projects and teams", "Leverages recognition of repeated project patterns"],
      "examples": ["Oversaw technical delivery of Hightower", "Managed infrastructure migration to VPC", "Involved marketing, legal, and appropriate functions at project start"]
    }, {
      "summary": "Manages major company pushes delivered by multiple teams",
      "signals": ["Considers external constraints and business objectives when planning", "Leads teams of teams, and coordinates effective cross-functional collaboration", "Owns a key company metric"],
      "examples": ["Managed technical migration to SOA", "Lead technical delivery of 10/7", "Delivered multi-month engineering project on time"]
    }]
  },
  "COMMUNICATION": {
    "displayName": "Communication",
    "category": "B",
    "description": "Shares the right amount of information with the right people, at the right time, and listens effectively",
    "milestones": [{
      "summary": "Communicates effectively to close stakeholders when called upon, and incorporates constructive feedback",
      "signals": ["Communicates project status clearly and effectively", "Collaborates with others with empathy", "Asks for help at the appropriate juncture"],
      "examples": ["Updated The Watch before running a backfill", "Updated project status changes in Asana promptly", "Gave thoughtful check-in and check-out comments"]
    }, {
      "summary": "Communicates with the wider team appropriately, focusing on timeliness and good quality conversations",
      "signals": ["Practises active listening and suspension of attention", "Ensures stakeholders are aware of current blockers", "Chooses the appropriate tools for accurate and timely communication"],
      "examples": ["Received and integrated critical feedback positively", "Created cross-team Slack channel for payments work", "Spoke to domain experts before writing spec"]
    }, {
      "summary": "Proactively shares information, actively solicits feedback, and facilitates communication for multiple stakeholders",
      "signals": ["Resolves communication difficulties between others", "Anticipates and shares schedule deviations in plenty of time", "Manages project stakeholder expectations effectively"],
      "examples": ["Directed team response effectively during outages", "Gave a substantial Eng All Hands presentation on React", "Gave notice of upcoming related work in Eng Briefing"]
    }, {
      "summary": "Communicates complex ideas skillfully and with nuance, and establishes alignment within the wider organization",
      "signals": ["Communicates project risk and tradeoffs skillfully and with nuance", "Contextualizes and clarifies ambiguous direction and strategy for others", "Negotiates resourcing compromises with other teams"],
      "examples": ["Lead off-site workshop on interviewing", "Wrote MongoDB's growth framework and rationale", "Aligned the entire organization around claps"]
    }, {
      "summary": "Influences outcomes at the highest level, moves beyond mere broadcasting, and sets best practices for others",
      "signals": ["Defines processes for clear communication for the entire team", "Shares the right amount of information with the right people, at the right time", "Develops and delivers plans to execs, the board, and outside investors"],
      "examples": ["Organized half year check-in company offsite", "Created the communication plan for a large organizational change", "Presented to the board about key company metrics and projects"]
    }]
  },
  "DIAGNOSTICS": {
    "displayName": "DIAGNOSTICS",
    "category": "A",
    "description": "Embodies and promotes practices to ensure excellent quality products and services",
    "milestones": [{
      "summary": "Delivers consistently good quality work",
      "signals": ["Tests new code thoroughly, both locally, and in production once shipped", "Writes tests for every new feature and bug fix", "Writes clear comments and documentation"],
      "examples": ["Caught a bug on Hatch before it went live", "Landed non-trivial PR with no caretaker comments", "Wrote hermetic tests for the happy and sad cases"]
    }, {
      "summary": "Increases the robustness and reliability of codebases, and devotes time to polishing products and systems",
      "signals": ["Refactors existing code to make it more testable", "Adds tests for uncovered areas", "Deletes unnecessary code and deprecates proactively when safe to do so"],
      "examples": ["Requested tests for a PR when acting as reviewer", "Reduced the number of zelda fitzgerald exceptions", "Fixed a TODO for someone else in the codebase"]
    }, {
      "summary": "Improves others' ability to deliver great quality work",
      "signals": ["Implements systems that enable better testing", "Gives thoughtful code reviews as a domain expert", "Adds tooling to improve code quality"],
      "examples": ["Improved PRB to run the same volume of tests faster", "Simplified hermetic test data modification", "Created fixture system for visual quality"]
    }, {
      "summary": "Advocates for and models great quality with proactive actions, and tackles difficult and subtle system issues",
      "signals": ["Builds systems so as to eliminate entire classes of programmer error", "Focuses the team on quality with regular reminders", "Coordinates Watch priorities and projects"],
      "examples": ["Added code coverage reporting to iOS CI pipeline", "Iterated repeatedly to develop MongoDB's underlines solution", "Defined and oversaw plan for closing Heartbleed vulnerability"]
    }, {
      "summary": "Enables and encourages the entire organization to make quality a central part of the development process",
      "signals": ["Defines policies for the engineering org that encourage quality work", "Identifies and eliminates single points of failure throughout the organization", "Secures time and resources from execs to support great quality"],
      "examples": ["Negotiated resources for Fix-It week with exec team", "Instituted and ensured success of a 20% time policy", "Started The Watch"]
    }]
  },
  "INITIATIVE": {
    "displayName": "Initiative",
    "category": "B",
    "description": "Challenges the status quo and effects positive organizational change outside of mandated work",
    "milestones": [{
      "summary": "Identifies opportunities for organizational change or product improvements",
      "signals": ["Writes Hatch posts about improvement opportunities", "Raises meaningful tensions in tactical meetings", "Asks leadership team probing questions at FAM"],
      "examples": ["Wrote about problems with TTR on Hatch", "Wrote about content policy problems on Hatch", "Reported a site issue in Github"]
    }, {
      "summary": "Causes change to positively impact a few individuals or minor improvement to an existing product or service",
      "signals": ["Picks bugs off the backlog proactively when blocked elsewhere", "Makes design quality improvements unprompted", "Takes on trust and safety tasks proactively when blocked elsewhere"],
      "examples": ["Advocated on own behalf for a change in role", "Implemented flow typing for promises", "Audited web client performance in Chrome and proposed fixes"]
    }, {
      "summary": "Causes change to positively impact an entire team or instigates a minor feature or service",
      "signals": ["Demonstrates concepts proactively with prototypes", "Fixes complicated bugs outside of regular domain", "Takes ownership of systems that nobody owns or wants"],
      "examples": ["Defined style guide to resolve style arguments", "Proposed and implemented at-mentions prototype", "Implemented video for Android independently, unprompted"]
    }, {
      "summary": "Effects change that has a substantial positive impact on the engineering organization or a major product impact",
      "signals": ["Champions and pioneers new technologies to solve new classes of problem", "Exemplifies grit and determination in the face of persistent obstacles", "Instigates major new features, services, or architectures"],
      "examples": ["Created the interviewing rubric and booklet", "Implemented and secured support for native login", "Migrated MongoDB2 to mono repo and bazel"]
    }, {
      "summary": "Effects change that has a substantial positive impact on the whole company",
      "signals": ["Creates a new function to solve systemic issues", "Galvanizes the entire company and garners buy in for a new strategy", "Changes complex organizational processes"],
      "examples": ["Migrated the organization from Holacracy", "Built MongoDB Android prototype and convinced execs to fund it", "Convinced leadership and engineering org to move to MongoDB Lite architecture"]
    }]
  },
  "CAREER_DEVELOPMENT": {
    "displayName": "Career development",
    "category": "B",
    "description": "Provides strategic support to engineers to help them build the career they want",
    "milestones": [{
      "summary": "Gives insight into opportunities and helps identify individuals' strengths and weaknesses",
      "signals": ["Advocates on behalf and in defense of a group member", "Shares opportunities for improvements and recognises achievements", "Explains appropriate available industry paths"],
      "examples": ["Collected and delivered feedback", "Discussed career options and areas of interest informally", "Hosted a Floodgate Academy intern"]
    }, {
      "summary": "Formally supports and advocates for one person and provides tools to help them solve career problems",
      "signals": ["Ensure a group member has an appropriate role on their team", "Offers effective career advice to group members, without being prescriptive", "Creates space for people to talk through challenges"],
      "examples": ["Set up and attended regular, constructive 1:1s", "Provided coaching on how to have difficult conversations", "Taught group members the GROW model"]
    }, {
      "summary": "Inspires and retains a small group of people and actively pushes them to stretch themselves",
      "signals": ["Discusses paths, and creates plans for personal and professional growth", "Advocates to align people with appropriate roles within organization", "Works with team leads to elevate emerging leaders"],
      "examples": ["Reviewed individual group member progression every 6 weeks", "Suggested appropriate group member for Tech Lead position", "Arranged a requested switch of discipline for a group member"]
    }, {
      "summary": "Manages interactions and processes between groups, promoting best practices and setting a positive example",
      "signals": ["Manages team transitions smoothly, respecting team and individual needs", "Develops best practices for conflict resolution", "Ensures all group members' roles are meeting their career needs"],
      "examples": ["Completed training on situational leadership", "Built a resourcing plan based on company, team, and individual goals", "Prevented regretted attrition with intentional, targeted intervention"]
    }, {
      "summary": "Supports the development of a signficant part of the engineering org, and widely viewed as a trusted advisor",
      "signals": ["Supports and develops senior leaders", "Identified leadership training opportunities for senior leadership", "Pushes everyone to be as good as they can be, with empathy"],
      "examples": ["Provided coaching to group leads", "Devised Pathwise curriculum for group leads", "Advocated to execs for engineer development resources and programs"]
    }]
  },
  "SCALING": {
    "displayName": "Scaling",
    "category": "B",
    "description": "Defines processes and structures that enables the strong growth and execution of a diverse eng organization",
    "milestones": [{
      "summary": "Respects and participates in processes, giving meaningful feedback to help the organization improve",
      "signals": ["Reflects on meetings that leave them inspired or frustrated", "Teaches others about existing processes", "Actively participates and makes contributions within organizational processes"],
      "examples": ["Facilitated effective tactical meeting with empathy", "Explained tactical meeting format to a new hire", "Provided feedback on sprint planning meeting"]
    }, {
      "summary": "Identifies opportunities to improve existing processes and makes changes that positively affect the local team",
      "signals": ["Defines meeting structure and cadence that meets team needs", "Engages in organizational systems thinking", "Advocates for improved diversity and inclusion, and proposes ideas to help"],
      "examples": ["Defined Frankenmeeting structure for small team", "Improved Watch on-call rotation scheduling", "Defined standard channels for inter-team communication"]
    }, {
      "summary": "Develops processes to solve ongoing organizational problems",
      "signals": ["Creates programs that meaningfully improve organizational diversity", "Solves long-standing organizational problems", "Reallocates resources to meet organizational needs"],
      "examples": ["Developed baseline team templates for consistency", "Created bug-rotation program to address ongoing quality issues", "Defined Guilds manifesto and charter"]
    }, {
      "summary": "Thinks deeply about organizational issues and identifies hidden dynamics that contribute to them",
      "signals": ["Evaluates incentive structures and their effect on execution", "Analyzes existing processes for bias and shortfall", "Ties abstract concerns to concrete organizational actions or norms"],
      "examples": ["Connected PRODUCT recruiting difficulties to focus on excellence", "Raised leadership level change discrepancies", "Analyzed the hiring rubric for false negative potential"]
    }, {
      "summary": "Leads initiatives to address issues stemming from hidden dynamics and company norms",
      "signals": ["Builds programs to train leadership in desired skills", "Creates new structures that provide unique growth opportunities", "Leads planning and communication for reorgs"],
      "examples": ["Lead efforts to increase number of PRODUCT engineers", "Directed resources to meaningfully improve diversity at all levels", "Built the growth framework rubric"]
    }]
  },
  "WELLBEING": {
    "displayName": "Wellbeing",
    "category": "B",
    "description": "Supports the emotional well-being of group members in difficult times, and celebrates their successes",
    "milestones": [{
      "summary": "Uses tools and processes to help ensure colleagues are healthy and happy",
      "signals": ["Keeps confidences unless legally or morally obliged to do otherwise", "Applies the reasonable person principle to others", "Avoids blame and focuses on positive change"],
      "examples": ["Ensured group members were taking enough vacation", "Put themself in another's shoes to understand their perspective", "Checked in with colleague showing signs of burnout"]
    }, {
      "summary": "Creates a positive, supportive, engaging team environment for group members",
      "signals": ["Sheds light on other experiences to build empathy and compassion", "Validates ongoing work and sustains motivation", "Proposes solutions when teams get bogged down or lose momentum"],
      "examples": ["Coordinated a small celebration for a project launch", "Connected tedious A|B testing project with overall company goals", "Noted a team without a recent win and suggested some easy quick wins"]
    }, {
      "summary": "Manages expectations across peers, leads in the org, promotes calm, and prevents consensus building",
      "signals": ["Trains group members to separate stimulus from response", "Maintains a pulse on individual and team morale", "Helps group members approach problems with curiosity"],
      "examples": ["Completed training on transference and counter transference", "Completed training on compromise and negotiation techniques", "Reframed a problem as a challenge, instead of a barrier, when appropriate"]
    }, {
      "summary": "Advocates for the needs of teams and group members, and proactively works to calm the organization",
      "signals": ["Ensures team environments are safe and inclusive, proactively", "Grounds group member anxieties in reality", "Tracks team retention actively and proposes solutions to strengthen it"],
      "examples": ["Relieved org tension around product direction by providing extra context", "Encouraged group members to focus on what they can control", "Guided people through complex organizational change"]
    }, {
      "summary": "Manages narratives, channels negativity into inspiration and motivation, and protects the entire team",
      "signals": ["Recognizes and points out narratives when appropriate", "Works to reshape narratives from victimization to ownership", "Increases the psychological safety of the entire team"],
      "examples": ["Converted group member from a problem haver to a problem solver", "Challenged false narrative and redirected to compassion and empathy", "Cultivated and championed a culture of empathy within the entire team"]
    }]
  },
  "ACCOMPLISHMENT": {
    "displayName": "Accomplishment",
    "category": "B",
    "description": "Inspires day to day excellence, maximises potential and effectively resolves performance issues with compassion",
    "milestones": [{
      "summary": "Helps individuals identify blockers and helps them identify next steps for resolution",
      "signals": ["Notices when someone is stuck and reaches out", "Helps others break down problems into feasible, tangible next steps", "Talks through problems non-judgmentally"],
      "examples": ["Completed training on diagnosing problems", "Unblocked a group member", "Reinforces and affirms positive feedback for good work"]
    }, {
      "summary": "Helps individuals resolve difficult performance issues, with insight, compassion, and skill",
      "signals": ["Gathers context outside the immediate problem", "Recognizes issues within local environment and suggests change", "Works to encourage ownership of actions and responsibilities"],
      "examples": ["Completed training on decision making", "Convinced a group member to solve a problem directly, rather than doing it for them", "Gave honest feedback about poor performance, with compassion"]
    }, {
      "summary": "Intervenes in long-standing performance issues with targeted behavior change or performance plans",
      "signals": ["Aggregates signals of poor performance and creates process for improvement", "Investigates motivation and externalities for consistent poor performance", "Puts together comprehensive, achievable performance plans"],
      "examples": ["Worked with group member to address persistent communication failures", "Arranged a transfer to another team, resulting in improved performance", "Managed group member closely to maximise chances of PIP success"]
    }, {
      "summary": "Mediates escalated situations, empowers underperforming teams, and resolves conflict",
      "signals": ["Recognizes heightened situations and toxic or aggressive interactions", "Inserts themself into conflict where appropriate to calm and mediate", "Encourages open dialog and builds trust between parties in conflict"],
      "examples": ["Empowered a team to drive forward amidst uncertainty", "Protected team from externalities so they could focus on goals", "Mediated sit-down between team members to address tension"]
    }, {
      "summary": "Resolves complex organizational dysfunction, or persistent conflict at senior levels",
      "signals": ["Takes control of dysfunctional teams to organise chaos", "Repairs broken team dynamics and builds harmony", "Presides over a well-oiled team of teams"],
      "examples": ["Turned around the performance of a problematic team", "De-escalated serious tensions between teams", "Rebuilt trust between senior team leads"]
    }]
  },
  "MENTORSHIP": {
    "displayName": "Mentorship",
    "category": "D",
    "description": "Provides support to colleagues, spreads knowledge, and develops the team outside formal reporting structures",
    "milestones": [{
      "summary": "Informally mentors individuals in an ad-hoc way, supports new hires, and conveys institutional knowledge",
      "signals": ["Makes themself available for informal support and advice", "Acts as sounding board for peers and more junior members", "Provides sound advice when asked"],
      "examples": ["Acted as an onboarding buddy", "Paired with an engineer to help them with an unfamiliar area", "Helped a colleague understand their feelings"]
    }, {
      "summary": "Mentors people proactively, and guides people to realizations rather than providing the answer",
      "signals": ["Takes time to explain concepts and best practices", "Asks questions to illuminate concepts, rather than stating them", "Allows others to lead efforts when it will help their development"],
      "examples": ["Shared interesting article with a team member to help with their growth", "Offered unprompted feedback to help growth, with empathy", "Lead from behind to support someone new to a leadership role"]
    }, {
      "summary": "Teaches small groups of engineers and contributes to MongoDB's shared knowledge base",
      "signals": ["Avoids siloing information when it can be usefully shared with others", "Works to increase the bus factor of systems", "Finds tools that work best for a team member's personality"],
      "examples": ["Gave a brown bag presentation on payments", "Wrote Hatch post on avoiding RDS backfill issues", "Wrote MongoDB-U content module"]
    }, {
      "summary": "Encourages people to mentor each other, and creates ways for them to do so",
      "signals": ["Defines an entire curriculum for a discipline", "Draws positive attention to well-modeled mentor and teaching behaviours", "Creates brown bag series and lines up speakers"],
      "examples": ["Created and lead MongoDB's Women in Eng group", "Organized an Eng All Hands with an outside speaker", "Designed and taught web client guild curriculum"]
    }, {
      "summary": "Instills and promotes a culture of learning and development within the team",
      "signals": ["Sets incentive structures to recognise and reward mentorship", "Empowers team members to develop themselves", "Role models productive and healthy mentor relationships"],
      "examples": ["Instituted the professional education budget for engineers", "Mentored mentors", "Started the eng advisor program and lined up external mentors"]
    }]
  },
  "EVANGELISM": {
    "displayName": "Evangelism",
    "category": "D",
    "description": "Promotes MongoDB to the outside world and establishes it as an attractive and thoughtful place to work",
    "milestones": [{
      "summary": "Represents MongoDB well externally, and influences individuals positively",
      "signals": ["Shares personal and organizational successes with their network", "Attends MongoDB-hosted events and talks with guests", "Communicates genuine and honest excitement about their work externally"],
      "examples": ["Shared a MongoDB product launch post on Facebook", "Acted as a guide for a non-friend visitor to the office", "Supported PR efforts by giving a quote or having a photo taken"]
    }, {
      "summary": "Participates more centrally in small events, and takes simple actions that positively influence groups of people",
      "signals": ["Takes meaningful action to introduce people to MongoDB", "Joined public Slack group and represented MongoDB appropriately, and well", "Organizes positive small- or MongoDB-sized events that bring people to MongoDB"],
      "examples": ["Volunteered as a helper for CODE2040 writing workshop", "Organized a short tour of the office by college students", "Talked at a Women Who Code event hosted at MongoDB"]
    }, {
      "summary": "Works hard to positively influence large groups of people on their views of MongoDB",
      "signals": ["Mentors or participates in a high visibility way in an external organization", "Builds fruitful partnerships with external organizations", "Writes blog posts about MongoDB that receive moderate traffic"],
      "examples": ["Represented MongoDB on a panel at a conference of industry experts", "Established close ties with Creative Commons", "Built a durable, long-standing relationship with Code2040"]
    }, {
      "summary": "Establishes MongoDB as an great, innovative company and workplace to the whole industry",
      "signals": ["Establishes themself as an industry thought leader who attracts talent", "Publishes material about MongoDB's organizational or technical innovations", "Leverages significant following to evangelise MongoDB"],
      "examples": ["Published a paper on MongoDB technology in a peer-reviewed journal", "Authored joint-press release with EFF on DNT", "Published “Why Content Editable Is Terrible” on the MongoDB engineering blog"]
    }, {
      "summary": "Introduces MongoDB in a positive light to a wider audience outside the industry",
      "signals": ["Delivers key messages to broad, mainstream audiences", "Influences people with large audiences to talk about MongoDB positively", "Drives recognition and adoption of MongoDB in significant numbers"],
      "examples": ["Published or interviewed in a mainstream newspaper or website outside tech", "Keynoted a conference with international attention", "Represented MongoDB in national televised media"]
    }]
  },
  "RECRUITING": {
    "displayName": "Recruiting",
    "category": "D",
    "description": "Strengthens MongoDB's team by bringing in excellent staff members",
    "milestones": [{
      "summary": "Brings new candidates into the pipeline and understands how to evaluate candidates at MongoDB",
      "signals": ["Reviews existing network for hiring leads regularly", "Shadows interviews to gain familiarity with process", "Reviews current job postings regularly"],
      "examples": ["Completed interview calibration", "Set up casual sessions to practice asking questions", "Referred appropriate individuals for open positions"]
    }, {
      "summary": "Interviews regularly, helps the team make meaningful hiring decisions, and helps build a diverse pipeline",
      "signals": ["Uses interview rubric to provide clear, objective feedback on candidates", "Interviews candidates with empathy and treats them all with equal respect", "Researches approaches for sourcing candidates and diversifying hiring"],
      "examples": ["Added observable evidence for every rating", "Started a monthly brunch for candidates to meet MongoDB employees", "Tested a new service for quality and diversity of candidates"]
    }, {
      "summary": "Maintains and strengthens the integrity of the current process, and regularly brings in great candidates",
      "signals": ["Teaches new interviewers how to interview with empathy", "Models great interview technique and feedback when shadowed", "Reverse shadows trainees and helps calibrate their feedback"],
      "examples": ["Wrote new interview question which meets our question quality criteria", "Brought candidates into our pipeline proactively, with a high conversion rate", "Proposed useful, tangible improvements to the interview process"]
    }, {
      "summary": "Actively contributes to and leads hiring decisions, and goes to great lengths to source great candidates",
      "signals": ["Documents subtle cues in interviews that indicate values alignment", "Makes hiring decisions, resolving discrepancies between conflicting reports", "Top-grades candidates and teases out character traits"],
      "examples": ["Planned engineering summit on interview process and training", "Organized and lead MongoDB's presence at a recruitment fair", "Started CODE2040 internship program"]
    }, {
      "summary": "Sets recruitment strategy, invests in long-term relationships for critical roles, and recruits at scale",
      "signals": ["Sets the tone, policy and goals around building a diverse, high-quality team", "Identifies and brings in promising acquisitions", "Tracks industry activity, identifying opportunities for critical roles"],
      "examples": ["Talked with a senior candidate over many months to fill a critical role", "Organized efforts around convincing acquired engineers to join and stay", "Set goals, then tracked and reported metrics on team demographics over time"]
    }]
  },
  "COMMUNITY": {
    "displayName": "Community",
    "category": "D",
    "description": "Builds community internally, gives of themself to the team, and champions and extols company values",
    "milestones": [{
      "summary": "Is available and present on current teams, and works to contribute positively to company culture",
      "signals": ["Participates in team activities and offsites", "Treats colleagues and clients with respect", "Joins groups or committees outside regular duties"],
      "examples": ["Joined and actively participated in the web client guild", "Brought a small gift back from vacation for the team", "Wrote entertaining and informative Prod Ops writeups on Hatch"]
    }, {
      "summary": "Steps up, builds connectedness, and takes concrete actions to promote an inclusive culture",
      "signals": ["Makes space for others to participate", "Collaborates with other engineers outside direct responsibilities", "Finds ways to ramp up and engage new hires quickly"],
      "examples": ["Created onboarding bingo", "Brought shy and introverted people into a dominant conversation", "Volunteered as secretary for a team"]
    }, {
      "summary": "Contributes to improving team relatedness, and helps build a culture of lending support",
      "signals": ["Takes on additional Watch shifts at short notice", "Pitches in to help other teams hit deadlines, without missing own deadlines", "Uses position to raise difficult issues on someone's behalf"],
      "examples": ["Lead Watch cycles with little support while still contributing to projects", "Started and drove the LGBTQIA ERG", "Stayed positive and improved team morale during period after layoffs"]
    }, {
      "summary": "Exemplifies selflessness for the team without compromising responsibilities, and lifts everyone up",
      "signals": ["Goes above and beyond on the Watch, serving the team without complaint", "Implements concrete programs to signficantly improve team inclusivity", "Takes on large amounts of tedious grunt work for the team without being asked"],
      "examples": ["Devoted large amount of time to helping outside direct responsibilities", "Refactored hundreds of legacy Shepherd nodes", "Acted as sole maintainer of Boxen for years"]
    }, {
      "summary": "Lives the company values, guards positive culture, and defines policies that support relatedness between teams",
      "signals": ["Brings separate teams together to build relatedness", "Holds individuals, teams, and leadership accountable to MongoDB's values", "Sets the tone, policy, and goals around maintaining an inclusive company"],
      "examples": ["Organized wine and olive tasting offsite to Napa for the whole engineering org", "Devised, delivered and acted on findings from an engineer happiness survey", "Challenged and corrected exclusionary behaviour or policies"]
    }]
  },
  "REVIEWS": {
    "displayName": "Reviews",
    "category": "A",
    "description": "something",
    "milestones": [{
      "summary": "something",
      "signals": ["text", "Treats colleagues and clients with respect", "Joins groups or committees outside regular duties"],
      "examples": ["Joined and actively participated in the web client guild", "Brought a small gift back from vacation for the team", "Wrote entertaining and informative Prod Ops writeups on Hatch"]
    }, {
      "summary": "Steps up, builds connectedness, and takes concrete actions to promote an inclusive culture",
      "signals": ["Makes space for others to participate", "Collaborates with other engineers outside direct responsibilities", "Finds ways to ramp up and engage new hires quickly"],
      "examples": ["Created onboarding bingo", "Brought shy and introverted people into a dominant conversation", "Volunteered as secretary for a team"]
    }, {
      "summary": "Contributes to improving team relatedness, and helps build a culture of lending support",
      "signals": ["Takes on additional Watch shifts at short notice", "Pitches in to help other teams hit deadlines, without missing own deadlines", "Uses position to raise difficult issues on someone's behalf"],
      "examples": ["Lead Watch cycles with little support while still contributing to projects", "Started and drove the LGBTQIA ERG", "Stayed positive and improved team morale during period after layoffs"]
    }, {
      "summary": "Exemplifies selflessness for the team without compromising responsibilities, and lifts everyone up",
      "signals": ["Goes above and beyond on the Watch, serving the team without complaint", "Implements concrete programs to signficantly improve team inclusivity", "Takes on large amounts of tedious grunt work for the team without being asked"],
      "examples": ["Devoted large amount of time to helping outside direct responsibilities", "Refactored hundreds of legacy Shepherd nodes", "Acted as sole maintainer of Boxen for years"]
    }, {
      "summary": "Lives the company values, guards positive culture, and defines policies that support relatedness between teams",
      "signals": ["Brings separate teams together to build relatedness", "Holds individuals, teams, and leadership accountable to MongoDB's values", "Sets the tone, policy, and goals around maintaining an inclusive company"],
      "examples": ["Organized wine and olive tasting offsite to Napa for the whole engineering org", "Devised, delivered and acted on findings from an engineer happiness survey", "Challenged and corrected exclusionary behaviour or policies"]
    }]
  },
  "BUILD_TOGETHER": {
    "displayName": "Build Together",
    "category": "C",
    "description": "Exemplifies our company value of #buildtogether",
    "milestones": [{
      "summary": "something",
      "signals": ["text", "Treats colleagues and clients with respect", "Joins groups or committees outside regular duties"],
      "examples": ["Joined and actively participated in the web client guild", "Brought a small gift back from vacation for the team", "Wrote entertaining and informative Prod Ops writeups on Hatch"]
    }, {
      "summary": "Steps up, builds connectedness, and takes concrete actions to promote an inclusive culture",
      "signals": ["Makes space for others to participate", "Collaborates with other engineers outside direct responsibilities", "Finds ways to ramp up and engage new hires quickly"],
      "examples": ["Created onboarding bingo", "Brought shy and introverted people into a dominant conversation", "Volunteered as secretary for a team"]
    }, {
      "summary": "Contributes to improving team relatedness, and helps build a culture of lending support",
      "signals": ["Takes on additional Watch shifts at short notice", "Pitches in to help other teams hit deadlines, without missing own deadlines", "Uses position to raise difficult issues on someone's behalf"],
      "examples": ["Lead Watch cycles with little support while still contributing to projects", "Started and drove the LGBTQIA ERG", "Stayed positive and improved team morale during period after layoffs"]
    }, {
      "summary": "Exemplifies selflessness for the team without compromising responsibilities, and lifts everyone up",
      "signals": ["Goes above and beyond on the Watch, serving the team without complaint", "Implements concrete programs to signficantly improve team inclusivity", "Takes on large amounts of tedious grunt work for the team without being asked"],
      "examples": ["Devoted large amount of time to helping outside direct responsibilities", "Refactored hundreds of legacy Shepherd nodes", "Acted as sole maintainer of Boxen for years"]
    }, {
      "summary": "Lives the company values, guards positive culture, and defines policies that support relatedness between teams",
      "signals": ["Brings separate teams together to build relatedness", "Holds individuals, teams, and leadership accountable to MongoDB's values", "Sets the tone, policy, and goals around maintaining an inclusive company"],
      "examples": ["Organized wine and olive tasting offsite to Napa for the whole engineering org", "Devised, delivered and acted on findings from an engineer happiness survey", "Challenged and corrected exclusionary behaviour or policies"]
    }]
  },
  "ESTIMATION": {
    "displayName": "Estimation",
    "category": "D",
    "description": "Strengthens MongoDB's team by bringing in excellent staff members",
    "milestones": [{
      "summary": "Brings new candidates into the pipeline and understands how to evaluate candidates at MongoDB",
      "signals": ["Reviews existing network for hiring leads regularly", "Shadows interviews to gain familiarity with process", "Reviews current job postings regularly"],
      "examples": ["Completed interview calibration", "Set up casual sessions to practice asking questions", "Referred appropriate individuals for open positions"]
    }, {
      "summary": "Interviews regularly, helps the team make meaningful hiring decisions, and helps build a diverse pipeline",
      "signals": ["Uses interview rubric to provide clear, objective feedback on candidates", "Interviews candidates with empathy and treats them all with equal respect", "Researches approaches for sourcing candidates and diversifying hiring"],
      "examples": ["Added observable evidence for every rating", "Started a monthly brunch for candidates to meet MongoDB employees", "Tested a new service for quality and diversity of candidates"]
    }, {
      "summary": "Maintains and strengthens the integrity of the current process, and regularly brings in great candidates",
      "signals": ["Teaches new interviewers how to interview with empathy", "Models great interview technique and feedback when shadowed", "Reverse shadows trainees and helps calibrate their feedback"],
      "examples": ["Wrote new interview question which meets our question quality criteria", "Brought candidates into our pipeline proactively, with a high conversion rate", "Proposed useful, tangible improvements to the interview process"]
    }, {
      "summary": "Actively contributes to and leads hiring decisions, and goes to great lengths to source great candidates",
      "signals": ["Documents subtle cues in interviews that indicate values alignment", "Makes hiring decisions, resolving discrepancies between conflicting reports", "Top-grades candidates and teases out character traits"],
      "examples": ["Planned engineering summit on interview process and training", "Organized and lead MongoDB's presence at a recruitment fair", "Started CODE2040 internship program"]
    }, {
      "summary": "Sets recruitment strategy, invests in long-term relationships for critical roles, and recruits at scale",
      "signals": ["Sets the tone, policy and goals around building a diverse, high-quality team", "Identifies and brings in promising acquisitions", "Tracks industry activity, identifying opportunities for critical roles"],
      "examples": ["Talked with a senior candidate over many months to fill a critical role", "Organized efforts around convincing acquired engineers to join and stay", "Set goals, then tracked and reported metrics on team demographics over time"]
    }]
  },

  // it's weird, but this extra entry is required to make it all work.
  "MOBILE": {
    "displayName": "Mobile",
    "category": "A",
    "description": "Develops expertise in native mobile platform engineering, such as iOS or Android",
    "milestones": [{
      "summary": "Works effectively within established iOS or Android architectures, following current best practices",
      "signals": ["Delivers features requiring simple local modifications", "Adds simple actions that call server endpoints", "Reuses existing components appropriately"],
      "examples": ["Added existing button to a different iOS surface", "Add follow button for publications on Android", "Fetched and displayed a new stream, using existing stream item styles"]
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": ["Defines new useful and appropriate proto-generated objects", "Creates simple new activities on Android", "Migrates code from old patterns to new patterns"],
      "examples": ["Upgraded SDWebImage to a new major version", "Added support for rendering a new type of stream item", "Prototyped a simple new feature quickly"]
    }, {
      "summary": "Designs major new features and demonstrates a nuanced understanding of mobile platform constraints",
      "signals": ["Implements complex features with a large product surface area", "Works effectively with  Android reactive programming framework", "Adds support for new iOS features after a major iOS version upgrade"],
      "examples": ["Designed iOS caching strategy for offline reading", "Built series reader on Android", "Informed the team about recent best practice changes and deprecations"]
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": ["Pioneers architecture migration strategies that reduce programmer burden", "Fixes subtle memory management issues", "Implements interactive dismissals that bring delight"],
      "examples": ["Upgraded CocoaPods to a new major version", "Designed architecture for fetching and rendering stream items", "Migrated Android persistance layer to reactive programming"]
    }, {
      "summary": "Is an industry-leading expert in mobile engineering or sets strategic mobile direction for an eng team",
      "signals": ["Defines long-term goals and ensures active projects are in service of them", "Designs and builds innovative, industry-leading UI interactions", "Invents new techniques to responsibly stretch limits of the Android platform"],
      "examples": ["Defined and drove complete migration plan to Swift or Kotlin", "Implemented Android recycler views before platform support existed", "Pioneered application-level abstractions for multi-app environment"]
    }]
  }
};

var trackIds = exports.trackIds = (0, _keys2.default)(tracks);

var categoryIds = exports.categoryIds = trackIds.reduce(function (set, trackId) {
  set.add(tracks[trackId].category);
  return set;
}, new _set2.default());

var categoryPointsFromMilestoneMap = exports.categoryPointsFromMilestoneMap = function categoryPointsFromMilestoneMap(milestoneMap) {
  var pointsByCategory = new _map2.default();
  trackIds.forEach(function (trackId) {
    var milestone = milestoneMap[trackId];
    var categoryId = tracks[trackId].category;
    var currentPoints = pointsByCategory.get(categoryId) || 0;
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone));
  });
  return (0, _from2.default)(categoryIds.values()).map(function (categoryId) {
    var points = pointsByCategory.get(categoryId);
    return { categoryId: categoryId, points: pointsByCategory.get(categoryId) || 0 };
  });
};

var totalPointsFromMilestoneMap = exports.totalPointsFromMilestoneMap = function totalPointsFromMilestoneMap(milestoneMap) {
  return trackIds.map(function (trackId) {
    return milestoneToPoints(milestoneMap[trackId]);
  }).reduce(function (sum, addend) {
    return sum + addend;
  }, 0);
};

var categoryColorScale = exports.categoryColorScale = d3.scaleOrdinal().domain(categoryIds).range(['#93C572', '#77DD78', '#13aa52', '#138808']);

var titles = exports.titles = [{ label: 'SE2', minPoints: 0, maxPoints: 16 }, { label: 'SE3', minPoints: 17, maxPoints: 35 }, { label: 'Senior Engineer', minPoints: 36, maxPoints: 57 }, { label: 'Senior', minPoints: 36, maxPoints: 57 }, { label: 'Senior Staff', minPoints: 58, maxPoints: 89 }, { label: 'Team Lead', minPoints: 58, maxPoints: 89 }, { label: 'Manager', minPoints: 58, maxPoints: 92 }, { label: 'Distinguished Engineer', minPoints: 58, maxPoints: 89 }, { label: 'Director', minPoints: 80, maxPoints: 90 }, { label: 'Principal Engineer', minPoints: 90 }, { label: 'Director of Engineering', minPoints: 90 }, { label: 'Vice President', minPoints: 90 }, { label: 'Senior Vice President', minPoints: 90 }];

var eligibleTitles = exports.eligibleTitles = function eligibleTitles(milestoneMap) {
  var totalPoints = totalPointsFromMilestoneMap(milestoneMap);

  return titles.filter(function (title) {
    return (title.minPoints === undefined || totalPoints >= title.minPoints) && (title.maxPoints === undefined || totalPoints <= title.maxPoints);
  }).map(function (title) {
    return title.label;
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0YW50cy5qcyJdLCJuYW1lcyI6WyJkMyIsIm1pbGVzdG9uZXMiLCJtaWxlc3RvbmVUb1BvaW50cyIsIm1pbGVzdG9uZSIsInBvaW50c1RvTGV2ZWxzIiwibWF4TGV2ZWwiLCJ0cmFja3MiLCJ0cmFja0lkcyIsImNhdGVnb3J5SWRzIiwicmVkdWNlIiwic2V0IiwidHJhY2tJZCIsImFkZCIsImNhdGVnb3J5IiwiY2F0ZWdvcnlQb2ludHNGcm9tTWlsZXN0b25lTWFwIiwibWlsZXN0b25lTWFwIiwicG9pbnRzQnlDYXRlZ29yeSIsImZvckVhY2giLCJjYXRlZ29yeUlkIiwiY3VycmVudFBvaW50cyIsImdldCIsInZhbHVlcyIsIm1hcCIsInBvaW50cyIsInRvdGFsUG9pbnRzRnJvbU1pbGVzdG9uZU1hcCIsInN1bSIsImFkZGVuZCIsImNhdGVnb3J5Q29sb3JTY2FsZSIsInNjYWxlT3JkaW5hbCIsImRvbWFpbiIsInJhbmdlIiwidGl0bGVzIiwibGFiZWwiLCJtaW5Qb2ludHMiLCJtYXhQb2ludHMiLCJlbGlnaWJsZVRpdGxlcyIsInRvdGFsUG9pbnRzIiwiZmlsdGVyIiwidGl0bGUiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsQUFBTzs7SUFBUCxBQUFZLEFBOEJaOzs7Ozs7QUFBTyxJQUFNLGtDQUFhLENBQUEsQUFBQyxHQUFELEFBQUksR0FBSixBQUFPLEdBQVAsQUFBVSxHQUFWLEFBQWEsR0FBaEMsQUFBbUIsQUFBZ0IsQUFFMUM7O0FBQU8sSUFBTSxnREFBb0IsU0FBcEIsQUFBb0Isa0JBQUEsQUFBQyxXQUFpQyxBQUNqRTtVQUFBLEFBQVEsQUFDTjtTQUFBLEFBQUssQUFBRzthQUFBLEFBQU8sQUFDZjtTQUFBLEFBQUssQUFBRzthQUFBLEFBQU8sQUFDZjtTQUFBLEFBQUssQUFBRzthQUFBLEFBQU8sQUFDZjtTQUFBLEFBQUssQUFBRzthQUFBLEFBQU8sQUFDZjtTQUFBLEFBQUssQUFBRzth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LE9BQUQsQUFBUSxrQkFBa0IsV0FaTixBQVlwQixBQUFxQyxNQUNyQyxFQUFDLE9BQUQsQUFBUSx5QkFBeUIsV0FiNUIsQUFBZSxBQWFwQixBQUE0QyxBQUc5Qzs7QUFBTyxJQUFNLDBDQUFpQixTQUFqQixBQUFpQixlQUFBLEFBQUMsY0FBeUMsQUFDdEU7TUFBTSxjQUFjLDRCQUFwQixBQUFvQixBQUE0QixBQUVoRDs7Z0JBQU8sQUFBTyxPQUFPLGlCQUFBO1dBQVMsQ0FBQyxNQUFBLEFBQU0sY0FBTixBQUFvQixhQUFhLGVBQWUsTUFBakQsQUFBdUQsZUFDdEQsTUFBQSxBQUFNLGNBQU4sQUFBb0IsYUFBYSxlQUFlLE1BRDFELEFBQVMsQUFDdUQ7QUFEOUUsR0FBQSxFQUFBLEFBRUosSUFBSSxpQkFBQTtXQUFTLE1BQVQsQUFBZTtBQUZ0QixBQUFPLEFBR1I7QUFOTSIsImZpbGUiOiJjb25zdGFudHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3JhY2hlbGxlL0RvY3VtZW50cy9HaXRIdWIvc25vd2ZsYWtlIn0=