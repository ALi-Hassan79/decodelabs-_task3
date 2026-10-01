RecoBot — AI Recommendation Logic

RecoBot is a lightweight, browser-based recommendation chatbot built with HTML, CSS, and vanilla JavaScript. It accepts natural-language preferences such as genres, moods, categories, or interests and recommends matching items from a predefined catalog.

Important: RecoBot does not use a machine-learning model or external AI API. Its recommendation engine uses content-based filtering with keyword/tag overlap scoring.

✨ Features

💬 Chat-style recommendation interface

🎯 Content-based recommendation using tag overlap

📊 Match scores for recommended items

🏷️ Displays matched tags for each recommendation

🎬 Catalog covering:

Movies

TV shows

Anime

Books

Games

Music

🌍 Multilingual interface:

English

Urdu

Spanish

French

Arabic

🔤 Basic synonym mapping for multilingual genre keywords

🌙 Dark/light theme support based on system preference, with theme support in the UI

📱 Responsive layout with mobile sidebar

📝 Conversation/history panel

⚡ Typing animation and interactive recommendation cards

♿ Reduced-motion support through prefers-reduced-motion

🚫 No backend, database, framework, or external API required

🧠 How the Recommendation System Works

RecoBot follows a simple content-based filtering pipeline:

User Input
    ↓
Lowercase + Tokenization
    ↓
Synonym Mapping
    ↓
Compare Tokens with Item Name / Category / Tags
    ↓
Count Matching Keywords
    ↓
Calculate Match Score
    ↓
Sort Recommendations
    ↓
Display Matching Items

1. Tokenization

The user's message is converted to lowercase and split into tokens.

For example:

"sci-fi action movies"

becomes approximately:

["sci-fi", "action", "movies"]

2. Synonym Mapping

Some non-English genre words are mapped to the catalog's English tags.

For example:

"ایکشن" → "action"
"تصوراتی" → "fantasy"
"مغامرة" / multilingual equivalents → "adventure"

This allows users to describe preferences in supported languages.

3. Tag Matching

Each catalog item contains a category and a set of tags.

Example:

{
  name: "Inception",
  category: "movie",
  tags: ["sci-fi", "thriller", "mind-bending", "action", "dream"]
}

The input tokens are compared with the item's name, category, and tags.

4. Scoring

Every matching token increases the item's score.

Conceptually:

score = number of matching preference tokens

Items with a score greater than zero are returned as recommendations.

5. Ranked Results

The recommendations are sorted by their match score, allowing the most relevant matching items to appear first.

The interface also shows matched tags so the user can understand why an item was recommended.

🗂️ Project Structure

Reco/
├── recobot.html
└── README.md

The project is intentionally self-contained. The HTML file includes the page structure, CSS styling, and JavaScript recommendation logic.

🚀 Getting Started

Requirements

No special software or package installation is required.

You only need a modern web browser such as:

Google Chrome

Microsoft Edge

Mozilla Firefox

Run Locally

Download or clone the project.

Open the Reco folder.

Double-click recobot.html.

Or open it directly in a browser using:

file:///path/to/Reco/recobot.html

No server or backend is required.

💡 Example Queries

Try messages such as:

sci-fi action movies

relaxing farming games

fantasy adventure books

horror shows

anime adventure

sci-fi space drama

You can also use the built-in example suggestion buttons in the interface.

🧩 Supported Commands

RecoBot has simple rule-based responses for common conversational inputs.

Examples include:

hello
hi
how are you
who are you
help
thank you
bye

If the input does not match one of these commands, it is treated as a recommendation request.

📚 Catalog

The current catalog contains 39 items across six categories:

Category

Example Items

Movies

Inception, Interstellar, The Matrix

Shows

Breaking Bad, Stranger Things, Friends

Anime

Spirited Away, Attack on Titan, Naruto

Books

1984, The Hobbit, Atomic Habits

Games

Minecraft, Valorant, Stardew Valley

Music

Lo-fi Beats, Classical Piano, K-pop Hits

The catalog can be expanded by adding more objects to the CATALOG array in recobot.html.

🛠️ Technology Stack

Technology

Purpose

HTML5

Page structure

CSS3

Layout, themes, animations, responsiveness

JavaScript

Chat behavior and recommendation logic

Unicode / Intl-compatible browser features

Multilingual text handling

Google Fonts

Inter and JetBrains Mono typography

No frameworks or libraries are required.

🔧 Customizing the Catalog

Find the CATALOG array in recobot.html:

const CATALOG = [
  {
    name: "Example Movie",
    emoji: "🎬",
    category: "movie",
    tags: ["action", "sci-fi", "thriller"]
  }
];

You can add your own movies, books, games, shows, anime, or music by following the same structure.

🌐 Adding a New Language

Language-specific interface text is stored in the TEXT object.

A new language can be added by creating another language entry containing:

Text direction (ltr or rtl)

Placeholder text

Button labels

History labels

Chat responses

Recommendation messages

Genre translations/synonyms can then be added to the SYNONYMS object.

📈 Limitations

RecoBot is designed as a simple educational recommendation system, so it has some limitations:

It does not learn from user behavior.

It does not use collaborative filtering.

It does not use embeddings or semantic similarity.

It does not use a trained ML model.

Recommendations depend on the predefined catalog and tags.

A recommendation cannot be generated for an item that is not represented in the catalog.

Keyword matching can produce false matches when words have multiple meanings.

The scoring method is intentionally simple and does not represent a probability of user preference.

🔮 Possible Future Improvements

The project could be extended with:

A larger and dynamically loaded catalog

TF-IDF or embedding-based similarity

Cosine similarity instead of basic keyword counts

User preference history

Personalized recommendations based on previous interactions

Persistent storage using localStorage or a database

Backend API integration

Movie/book/game APIs for live catalog data

More advanced natural-language processing

User accounts and recommendation profiles

Adjustable recommendation weights

Evaluation metrics such as precision, recall, or click-through rate

🎓 Project Concept

This project demonstrates the basic idea behind a content-based recommender system:

Recommend items by comparing the characteristics of an item with the characteristics requested by the user.

The project is useful for understanding:

Conditional logic

String processing

Tokenization

Keyword matching

Sets

Arrays and objects

Sorting

Scoring/ranking

DOM manipulation

Event handling

Responsive UI design

Multilingual interfaces

📄 License

This project can be used and modified for educational and personal project purposes. Add a specific open-source license such as MIT if you intend to distribute the project publicly under those terms.

RecoBot — simple input,  tag matching, ranked recommendations.