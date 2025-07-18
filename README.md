# Mobile Developer Portfolio Template

[Demo](https://www.devportfoliotemplates.com/portfolio-templates/mobile-developer)

## Getting Started

You have two options to get started with this template:

### Option 1: Using Git Sparse Checkout

If you want to clone only this specific template:

```bash
git clone --no-checkout https://github.com/devportfoliotemplates/devportfoliotemplates.git
cd devportfoliotemplates
git sparse-checkout init --cone
git sparse-checkout set mobile-developer-portfolio-template
git checkout
```

### Option 2: Direct Download

You can download this template as a ZIP file:

1. Visit [download-directory.github.io](https://download-directory.github.io/)
2. Paste the URL of this portfolio folder: `https://github.com/devportfoliotemplates/devportfoliotemplates/tree/main/mobile-developer-portfolio-template`
3. Download and extract the ZIP file

### Running the Template

Once you have the template:

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

## Customization

### Personal Information

1. Update metadata in `app/layout.tsx`:

   - Site title
   - Description
   - Open Graph metadata
   - Favicon

2. Modify content in `app/page.tsx`:

   - Hero section
   - About section
   - Projects
   - Contact information

3. Replace assets:
   - Replace images in the `public` directory
   - Update social media icons
   - Modify logo if needed

### Styling

1. Colors and Theme:

   - Customize colors in `tailwind.config.js`
   - Modify theme variables in `app/globals.css`

2. Typography:

   - Update font families in `tailwind.config.js`
   - Modify text sizes and weights

3. Layout:
   - Adjust spacing and padding in component files
   - Modify responsive breakpoints in `tailwind.config.js`

## Troubleshooting

### Common Issues

1. **Build Errors**

   - Ensure all dependencies are installed
   - Clear `.next` folder and node_modules
   - Run `npm install` again

2. **Styling Issues**

   - Run `npm run build` to ensure TailwindCSS classes are generated
   - Check for conflicting styles in `globals.css`

3. **Image Loading**
   - Verify images are in the correct format (PNG, JPG, WebP)
   - Check image paths are correct
   - Ensure images are in the `public` directory

## Deployment

Follow these steps to deploy your portfolio for free using GitHub and Vercel:

1. Create a new GitHub repository

2. Push your portfolio to GitHub

3. Deploy with Vercel:
   - Go to [Vercel](https://vercel.com)
   - Sign up or log in with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js
   - Click "Deploy"

Your portfolio will be live in minutes with a free Vercel domain (e.g., `your-repo.vercel.app`). You can later add a custom domain in your Vercel project settings.

## Support

If you find these templates helpful, please consider:

- Starring the repository ⭐
- Sharing with other developers
- [Buying me a coffee](https://www.buymeacoffee.com/andreiancu) ☕

For issues and feature requests, please [create an issue](https://github.com/devportfoliotemplates/devportfoliotemplates/issues).

---

## 1. Push Your Project to GitHub

**A. Create a New GitHub Repository**
1. Go to [GitHub New Repo](https://github.com/new) and create a new repository (e.g., `mobile-developer-portfolio-template`).

**B. Push Your Code**
Open a terminal in your project folder and run:
```sh
<code_block_to_apply_changes_from>
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```
Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repo name.

---

## 2. Deploy to Vercel

**A. Sign Up or Log In**
- Go to [Vercel](https://vercel.com) and sign in with your GitHub account.

**B. Import Your Project**
1. Click **"New Project"**.
2. Select your GitHub repo.
3. Vercel will auto-detect your Next.js project. Click **"Deploy"**.

**C. Get Your URL**
- After deployment, Vercel will give you a public URL (e.g., `https://your-repo-name.vercel.app`).

---

## 3. (Optional) Add a Custom Domain

- In your Vercel dashboard, go to your project settings and add a custom domain if you have one.

---

## 4. Troubleshooting

If you see errors like:
- `ENOENT: no such file or directory, open ...app-build-manifest.json`
- Build or deploy failures

**Try:**
- Deleting `.next` and `node_modules` folders, then running:
  ```sh
  npm install
  npm run build
  ```
- Make sure your `package.json` has the correct scripts:
  ```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
  ```

---

## 5. Need More Help?

If you get stuck at any step:
- Paste the error message here, and I’ll help you fix it.
- If you want, I can generate a `.env` file, update configs, or help with GitHub Actions for CI/CD.

---

**Once you follow these steps, your site will be live and you’ll have a public URL to share!  
Let me know if you want me to walk you through any step in detail, or if you hit any errors.**
