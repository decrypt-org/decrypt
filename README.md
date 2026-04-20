# 🔐 Decrypt

> Open-source cryptographic primitives, protocols, and implementation guides. Built for the next generation of privacy.

[![Built with Docusaurus](https://img.shields.io/badge/Built%20with-Docusaurus-blue?style=for-the-badge&logo=docusaurus)](https://docusaurus.io/)
[![Node.js](https://img.shields.io/badge/Node.js-v20+-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![Deployment](https://img.shields.io/badge/Deployment-GitHub%20Pages-brightgreen?style=for-the-badge&logo=github)](https://github.com/discrete-org)

**Decrypt** is a technical roadmap designed to demystify the mathematics, protocols, and implementation standards that secure our digital existence. It serves as the official cryptographic documentation wing of the **discrete-sh** ecosystem.

## 📖 The Philosophy
Most cryptography resources are either purely academic or "black-box" tutorials that don't explain the *why*. This site bridges that gap. We focus on:
1. **Mathematical Foundations:** Modular arithmetic, Prime Number Theory, and Logic.
2. **Protocol Breakdowns:** AES, RSA, ECC, and TLS.
3. **Implementation Standards:** Practical code examples and the strict enforcement of the golden rule: *"Don't roll your own crypto."*

---

## 🏗️ Architecture

This site is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator. 

### Content Structure
All cryptographic documentation lives inside the `docs/` directory. The structure is broken down into modular pathways:
* `/docs/foundations/` - Core mathematics (Clock Math, Primes, XOR).
* `/docs/symmetric-crypto/` - Shared-secret algorithms and block modes.
* `/docs/asymmetric/` - Public Key Infrastructure (PKI).
* `/docs/hashing/` - Integrity, HMACs, and Digital Signatures.

---

## 🚀 Local Development

To contribute to the documentation or run the site locally, follow these steps.

### Prerequisites
* **Node.js**: You must have **Node.js v20.0 or higher** installed.

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/discrete-org/decrypt.git](https://github.com/discrete-org/decrypt.git)
   cd decrypt
   ```
2. Install the dependencies: 
    ```bash
    npm install
    ```
### Running the Site
To start the local development server (which features hot-reloading):
    ```bash
    npm start
    ```
The site will be available at http://localhost:3000.
(Note: If the site throws a sub-path error, ensure the url in docusaurus.config.js does not contain any trailing slashes or subdirectories).

### Building for Production
To generate the static HTML files into the build/ directory:
    ```bash
    npm run build
    ```

## ⚙️ Deployment Pipeline
This repository is configured with Continuous Integration via GitHub Actions.
Any commits pushed to the main branch will automatically trigger the .github/workflows/deploy.yml workflow.

The workflow will:

1. Provision a Node.js 20 environment.

2. Build the Docusaurus static files.

3. Force-push the build/ directory to the gh-pages branch.

Live Site: Hosted automatically on GitHub Pages.

## 🤝 Contributing
A strong README.md is the front door to any open-source project. Since Decrypt is a technical, cryptography-focused documentation site under the discrete-org umbrella, the README needs to look professional, explain the architecture, and provide clear instructions for local development.

Here is a complete, copy-paste ready README.md tailored specifically to the project we just built.

Create a file named README.md in the root of your project and paste this in:

Markdown
# 🔐 Decrypt

> Open-source cryptographic primitives, protocols, and implementation guides. Built for the next generation of privacy.

[![Built with Docusaurus](https://img.shields.io/badge/Built%20with-Docusaurus-blue?style=for-the-badge&logo=docusaurus)](https://docusaurus.io/)
[![Node.js](https://img.shields.io/badge/Node.js-v20+-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![Deployment](https://img.shields.io/badge/Deployment-GitHub%20Pages-brightgreen?style=for-the-badge&logo=github)](https://github.com/discrete-org)

**Decrypt** is a technical roadmap designed to demystify the mathematics, protocols, and implementation standards that secure our digital existence. It serves as the official cryptographic documentation wing of the **discrete-sh** ecosystem.

## 📖 The Philosophy
Most cryptography resources are either purely academic or "black-box" tutorials that don't explain the *why*. This site bridges that gap. We focus on:
1. **Mathematical Foundations:** Modular arithmetic, Prime Number Theory, and Logic.
2. **Protocol Breakdowns:** AES, RSA, ECC, and TLS.
3. **Implementation Standards:** Practical code examples and the strict enforcement of the golden rule: *"Don't roll your own crypto."*

---

## 🏗️ Architecture

This site is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator. 

### Content Structure
All cryptographic documentation lives inside the `docs/` directory. The structure is broken down into modular pathways:
* `/docs/foundations/` - Core mathematics (Clock Math, Primes, XOR).
* `/docs/symmetric-crypto/` - Shared-secret algorithms and block modes.
* `/docs/asymmetric/` - Public Key Infrastructure (PKI).
* `/docs/hashing/` - Integrity, HMACs, and Digital Signatures.

---

## 🚀 Local Development

To contribute to the documentation or run the site locally, follow these steps.

### Prerequisites
* **Node.js**: You must have **Node.js v20.0 or higher** installed.

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/discrete-org/decrypt.git](https://github.com/discrete-org/decrypt.git)
   cd decrypt
Install the dependencies:

Bash
npm install
Running the Site
To start the local development server (which features hot-reloading):

Bash
npm start
The site will be available at http://localhost:3000.

(Note: If the site throws a sub-path error, ensure the url in docusaurus.config.js does not contain any trailing slashes or subdirectories).

Building for Production
To generate the static HTML files into the build/ directory:

Bash
npm run build
⚙️ Deployment Pipeline
This repository is configured with Continuous Integration via GitHub Actions.
Any commits pushed to the main branch will automatically trigger the .github/workflows/deploy.yml workflow.

The workflow will:

Provision a Node.js 20 environment.

Build the Docusaurus static files.

Force-push the build/ directory to the gh-pages branch.

Live Site: Hosted automatically on GitHub Pages.

🤝 Contributing
We welcome pull requests! If you find a mathematical error, a vulnerable code snippet, or a typo, please open an issue or submit a PR.

1. Fork the Project

2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)

3. Commit your Changes (`git commit -m 'feat: add Zero Knowledge Proofs module'`)

4. Push to the Branch (`git push origin feature/AmazingFeature`)

5. Open a Pull Request