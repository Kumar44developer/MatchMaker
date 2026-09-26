# TDC MatchMaker

An internal matchmaker dashboard built for The Dating Company (TDC). Matchmakers use this tool to manage assigned customer profiles, view AI-ranked match suggestions, send curated introductions, and maintain meeting notes — all from a single operations desk.

## Live Preview

![Login Screen](https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80)

## Features

- **Customer Management** — Browse and search assigned customer profiles with full demographic, professional, and personal preference details.
- **AI-Ranked Matching** — 100 candidate profiles are generated and scored against each customer using weighted compatibility rules (age, location, income, religion, caste, languages, values, relocation flexibility, and marital status).
- **Match Scoring Engine** — Each match receives a numeric score (0–98) and a label: High Potential Match, Strong Fit, Review Worthy, or Low Priority.
- **AI-Generated Introductions** — Every match card includes a personalized introduction message ready to send.
- **Send Match Flow** — One-click modal to review and confirm match introductions with email preview.
- **Meeting Notes** — Inline editable notes per customer for tracking call summaries and follow-ups.
- **Responsive Layout** — Fully responsive grid layout that adapts from desktop to mobile.
- **Login Screen** — Sample internal login page with pre-filled credentials for demo access.

## Tech Stack

| Layer       | Technology                |
|-------------|---------------------------|
| Framework   | React 19                  |
| Build Tool  | Vite 7                    |
| Icons       | Lucide React              |
| Styling     | Vanilla CSS               |
| Language    | JavaScript (JSX)          |

## Project Structure

```
MatchMaker/
├── index.html            # HTML entry point
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite + React plugin configuration
├── .gitignore            # Ignored files (node_modules, dist)
├── src/
│   ├── main.jsx          # Application logic, components, data, and scoring engine
│   └── styles.css        # Complete stylesheet
└── dist/                 # Production build output
```

## Prerequisites

- **Node.js** — Version 18 or higher
- **npm** — Version 9 or higher

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Kumar44developer/MatchMaker.git
cd MatchMaker
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### 4. Login

Use the sample credentials displayed on the login screen:

| Field    | Value           |
|----------|-----------------|
| Username | tdc_matchmaker  |
| Password | password123     |

## Available Scripts

| Command             | Description                                      |
|---------------------|--------------------------------------------------|
| `npm run dev`       | Start the Vite development server with hot reload |
| `npm run build`     | Create an optimized production build in `dist/`   |
| `npm run preview`   | Preview the production build locally              |

## How the Matching Algorithm Works

The scoring engine evaluates each candidate against the selected customer using weighted criteria:

| Criteria               | Max Points | Logic                                                  |
|------------------------|------------|--------------------------------------------------------|
| Base Score             | 28         | Every candidate starts with 28 points                  |
| Same City              | 14         | Exact city match                                       |
| Age Preference         | 12–14      | Gender-specific age range rules                        |
| Income Alignment       | 10         | Gender-specific income expectations                    |
| Height Preference      | 8–9        | Gender-specific height rules                           |
| Religion Match         | 8          | Same religion                                          |
| Relocation Flexibility | 8          | Either party open to relocating                        |
| Children Preference    | 8          | Matching kids preference (male customers)              |
| Shared Languages       | 10         | 4 points per shared language, capped at 10             |
| Shared Values          | 14         | 7 points per shared value signal, capped at 14         |
| Caste Alignment        | 6          | Same caste or community                               |
| Marital Status         | 5          | Same marital status                                    |

Final scores are capped at 98. Candidates are sorted by score and the top 8 are displayed.

**Score Labels:**

| Score Range | Label               |
|-------------|---------------------|
| 82–98       | High Potential Match |
| 68–81       | Strong Fit          |
| 54–67       | Review Worthy       |
| Below 54    | Low Priority        |

## Sample Data

The dashboard ships with 3 pre-loaded customer profiles:

| Name            | Age | City       | Company   | Status              |
|-----------------|-----|------------|-----------|---------------------|
| Rohan Mehta     | 31  | Bengaluru  | Razorpay  | Ready for shortlist |
| Ananya Iyer     | 30  | Chennai    | Google    | Profile verified    |
| Karthik Rao     | 33  | Hyderabad  | Amazon    | Needs call notes    |

100 candidate profiles are procedurally generated per customer for the opposite gender pool.

## Building for Production

```bash
npm run build
```

Output is written to the `dist/` directory. Serve it with any static file server:

```bash
npm run preview
```

## License

This project is provided as-is for internal demonstration purposes.
