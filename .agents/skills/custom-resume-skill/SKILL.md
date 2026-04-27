---
name: resume-tailor-json
description: Tailors an existing Reactive Resume JSON file to match a target job description by improving summary, skills, and experience wording while preserving truthfulness, structure, and all UI metadata.
---

# Resume Tailor JSON

Use this skill to update an existing Reactive Resume JSON resume so it aligns more closely with a provided job description.

The goal is to improve recruiter relevance, ATS keyword matching, and hiring-manager readability **without fabricating experience**.

This skill is specifically for editing an existing JSON resume, not creating one from scratch.

---

## When to Use

- Use this skill when the user provides a job description and wants their JSON resume tailored.
- Use this skill when working with Reactive Resume exports or structured JSON resumes.
- Use this skill when the user wants stronger ATS keyword alignment.
- Use this skill when the user wants role-specific resume versions.
- Use this skill when summary, skills, and wording need optimization while keeping facts intact.

---

## Instructions

## Primary Objective

Modify only the content portions of the JSON resume to better match the target job description while preserving truthfulness and JSON validity.

Optimize:

- Professional overview / summary
- Technical skills section
- Experience bullet wording

Preserve:

- All metadata
- All UI configuration
- All schema structure
- Dates, titles, companies, education, certifications unless explicitly asked

---

## Non-Negotiable Rules

### Preserve JSON Integrity

- Output valid JSON only.
- Keep all required fields.
- Do not rename keys unless required by schema consistency.
- Preserve nesting and arrays.

### Never Modify UI / Metadata Fields

Do not change any fields related to presentation or internal app behavior.

Examples include:

- id
- template
- layout
- design
- page settings
- typography
- color theme
- visibility toggles
- section IDs
- timestamps
- internal metadata

If uncertain whether a field is metadata, leave it unchanged.

### Preserve Truthfulness

Never fabricate:

- skills not reasonably supported
- companies
- dates
- titles
- certifications
- metrics
- projects
- responsibilities

You may rephrase existing experience for stronger positioning.

---

## Section-by-Section Guidance

## 1. Professional Overview / Summary

Strongly encouraged to rewrite.

### Goal

Align the candidate’s identity with the target role.

### Include Relevant Themes Such As

- Senior Software Engineer
- distributed systems
- scalable backend services
- cloud-native platforms
- infrastructure engineering
- data pipelines
- full-stack development
- AI platform engineering
- reliability engineering
- security platforms

### Best Practices

- 2 to 4 concise lines
- Strong opening sentence
- Mention years of experience
- Mention most relevant technologies if appropriate
- Tailor tone to target role

---

## 2. Technical Skills

Strongly encouraged to update.

### Reorder Skills by Job Relevance

Examples:

#### Backend Role

- Go
- Java
- Python
- APIs
- Microservices

#### Infrastructure Role

- Kubernetes
- Docker
- AWS
- CI/CD
- Monitoring
- Terraform (only if already supported)

#### Data Role

- Kafka
- Spark
- SQL
- Streaming
- NoSQL

#### Full-Stack Role

- React
- TypeScript
- APIs
- Backend stack

### Add Existing Skills Already Supported

If mentioned elsewhere in experience but omitted from skills, add them.

### Remove or Deprioritize Weak / Irrelevant Items

Trim clutter where helpful.

---

## 3. Experience Section

Modify wording only.

### Preserve

- Company names
- Job titles
- Dates
- Core responsibilities
- Metrics already present

### Allowed Changes

#### Improve Impact Language

Use verbs such as:

- Architected
- Designed
- Built
- Led
- Scaled
- Automated
- Optimized
- Delivered
- Owned

#### Insert Relevant Keywords Naturally

Examples:

- distributed systems
- scalable services
- low latency
- resilient systems
- cloud-native
- microservices
- APIs
- CI/CD
- observability
- automation
- monitoring
- incident response
- streaming pipelines
- event-driven architecture
- cross-functional collaboration

#### Highlight Ownership

Prefer:

- Owned end-to-end delivery
- Led implementation
- Architected solution
- Managed rollout
- Improved reliability

### Preserve Metrics

Keep metrics exactly when present:

- petabytes/day
- 1M events/sec
- 5000+ users

Do not invent new numbers.

---

## Tailoring Strategy by Role Type

## Backend / Platform

Emphasize:

- Go / Java / Python
- APIs
- Microservices
- Scale
- Performance
- Reliability

## Infrastructure / SRE

Emphasize:

- Kubernetes
- AWS
- Docker
- CI/CD
- Monitoring
- Automation
- Incident response

## Data Engineering

Emphasize:

- Kafka
- Spark
- Pipelines
- SQL
- High throughput
- Batch + streaming

## Full-Stack

Emphasize:

- React
- TypeScript
- APIs
- User-facing systems
- End-to-end ownership

## AI / ML Platform

Emphasize:

- Python
- Scalable compute
- Pipelines
- Automation
- GenAI tools

---

## Style Rules

- Use concise senior-level wording.
- Avoid buzzword stuffing.
- Use keywords naturally in sentences.
- Keep bullets readable.
- Prefer outcomes over task lists.

---

## Output Rules

- Return only updated JSON.
- No markdown fences.
- No explanations.
- No commentary.
- No notes.

---

## Validation Checklist

Before returning output, verify:

- JSON is valid
- Metadata unchanged
- Summary improved
- Skills aligned to role
- Experience wording stronger
- Facts preserved
- Dates unchanged
- Metrics preserved
- Keywords naturally added

---

## Candidate Context

This resume owner is strongest in:

- Distributed systems
- High-scale backend engineering
- Kafka / Spark pipelines
- Go / Python / Java
- AWS / Kubernetes
- Security platforms
- Authentication systems
- Selective full-stack engineering

Default to emphasizing these strengths based on the job description.

---

## Clarification Rule

Use the ask questions tool if:

- JSON schema is unclear
- Required fields are ambiguous
- Multiple versions of resume exist
- User wants aggressive tailoring vs conservative edits
- Missing job description