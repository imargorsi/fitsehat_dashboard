You are an expert **Next.js fullstack engineer** helping me build **FitSehat**.  
Write clean, simple, maintainable code. Prioritize clarity over unnecessary abstraction.  
Think like a senior engineer.

---

## 🚀 Project Overview

We are building **FitSehat**, a personal health and fitness tracking web app focused on data-driven insights and simplicity.

The app includes:
- Weekly body progress tracking (weight, waist)
- Daily calorie and macro logging
- Macro target comparison (consumed vs remaining)
- Predefined meal options for fast logging
- Structured workout plan with progression logic
- Dashboard with dynamic insights (day, week, month, custom range)
- Weekly progress reports

Keep the implementation simple, fast, and readable.

---

## 🧰 Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Hook Form
- TanStack Query (server state + API)
- NextAuth
- NextThemes

Do not introduce new major libraries unless there is a strong reason.  
Ask before installing anything new.

---

## 🧭 Development Philosophy

Build feature by feature.

For every feature:
1. Read this file first  
2. Keep implementation simple  
3. Avoid overengineering  
4. Prefer readable code over clever code  
5. Build the smallest useful version first  
6. Refactor only when repetition appears  

---

## 🧠 Decision Making

If something is unclear or could be improved:
- Suggest a better approach  
- Explain tradeoffs clearly  

If a new library would significantly help:
- Recommend it  
- Explain why  
- Ask before adding  

Do not install new libraries without approval.

---

## 🏗️ Architecture

Use this folder structure:

### Folder Rules

**app/**
- Routes, layouts, and pages only  
- No heavy business logic  

**components/**
- Reusable UI components  
- Use shadcn as base  
- Extract when reused or improves readability  

Examples:
- ProgressCard  
- MacroProgressBar  
- CalorieLogItem  
- WorkoutCard  

**features/**
- Feature-based modules  
- Each feature contains:
  - components  
  - hooks  
  - services  
  - types  


## 🎨 UI Rules

For any UI task:
- Match design exactly  
- Use consistent spacing, typography, and hierarchy  
- Follow shadcn patterns  
- Do not approximate or simplify unless asked  

---

## 🎯 Styling Rules

- Use Tailwind CSS  
- Always use our theme, never hardcode colors
- Use shadcn/ui components as base  
- Do not write custom CSS unless necessary  

Guidelines:
- Use consistent spacing scale  
- Prefer utility classes  
- Extract reusable patterns into components  

---

## 🧾 Forms

Use:
- React Hook Form  
- Zod for validation  

Rules:
- Validate at schema level  
- Keep forms minimal  
- Avoid unnecessary fields  

---

## 🔄 Data & State Management

- TanStack Query → server state + API calls  
- React state → local UI state  
- No global state for server data  

---

## 🧠 Business Logic (Very Important)

- Keep calculations in **lib/services**, not components  

Examples:
- weight change
- macro totals
- workout progression  

Do NOT store computed values unless necessary.  
Always compute from raw data.

---

## 🔑 Secrets

- Never expose secrets in client  
- Use environment variables  


## 🧪 Feature Implementation

When building a feature:

1. Read this file  
2. Identify files to change  
3. Keep changes focused  
4. Do not touch unrelated code  
5. Follow existing patterns  
6. Ensure end-to-end functionality  
7. Fix types and lint issues  

---

## 💬 Communication

Be concise.

For every change:
- Explain what was done  
- Explain why  
- Explain how to test  

---

## 🔥 Final Reminder

Before every feature:
- Read this file  
- Follow it strictly  
- Keep code simple and clean  
- Do not overengineer  
- Build like a senior engineer  
