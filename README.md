# FUTURE TAX — Accounting, Taxation & Business Compliance

**Your Business. Our Expertise.**

Future Tax is a professional business services website designed to present accounting, taxation, business registration, legal documentation, and HR compliance services in one place. The website provides a modern interface, animated content, service details, and an enquiry form that helps visitors continue their consultation requests through WhatsApp.

## 🌐 Project Overview

Future Tax helps individuals, startups, and businesses explore essential financial and compliance support services through a single website.

### ✨ Key Features

- **Modern UI/UX** — Clean layout, professional typography, gradients, and structured content.
- **Animated Hero Section** — Typing text that highlights different business services.
- **Loading Screen** — Animated loading indicator with a fade-out transition.
- **Responsive Navigation** — Navigation links and a mobile menu toggle.
- **Service Showcase** — Dedicated cards for seven major business service categories.
- **Smooth Scrolling & Animations** — Support for scroll effects and progressive visual enhancements.
- **About Us Section** — Company introduction, mission, vision, and business values.
- **Step-by-Step Process** — Understand, Plan, Execute, and Support.
- **Frequently Asked Questions** — Answers to common accounting and compliance questions.
- **Contact Form** — Collects name, phone, email, service selection, and enquiry details.
- **WhatsApp Integration** — Prepares an enquiry message for the visitor to review and send through WhatsApp.
- **Contact Information** — Phone, email, and location sections.
- **SEO Basics** — Page title, description, and viewport metadata.
- **Accessibility Considerations** — Semantic elements, labels, alternative text, and reduced-motion support.

## 🧾 Services Offered

### 1. GST Services
- GST registration and amendments
- GST return filing support
- Input Tax Credit (ITC) reconciliation
- GST cancellation and revocation assistance
- GST rate and HSN/SAC guidance

### 2. TallyPrime & Accounting
- TallyPrime setup and support
- Bookkeeping and voucher entries
- Profit & Loss and Balance Sheet preparation
- Bank, debtor, and creditor reconciliation
- Management Information System (MIS) reports

### 3. Income Tax & TDS
- Income tax return preparation and filing
- Tax computation and advance tax support
- TAN and TDS/TCS return assistance
- TDS calculation and challan payment support
- Tax notice and assessment assistance

### 4. Business Registration & MSME
- Proprietorship, partnership, LLP, and company registration support
- Udyam (MSME) registration assistance
- Shops & Establishment registration support
- Business structure guidance
- Applicable MCA/ROC compliance assistance

### 5. Legal & Documentation
- Document drafting and review coordination
- Declaration and affidavit assistance
- Statutory notice documentation
- Trademark registration guidance
- Legal notice and reply assistance

### 6. Agreements & Contracts
- Client, vendor, and service agreements
- Employment and consultancy agreements
- Non-Disclosure Agreements (NDAs)
- Rental, lease, and partnership documents
- Stamp duty and registration guidance

### 7. HR & Labour Compliance
- Payroll processing and salary records
- PF/ESI registration and filing assistance
- Appointment letters and HR policies
- Contract labour compliance support
- Applicable labour and workplace documentation

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Website structure and content |
| CSS3 | Styling, layouts, transitions, and responsive design |
| JavaScript | Interactive elements and dynamic behaviour |
| Google Fonts | Cormorant Garamond and DM Sans typography |
| WhatsApp | Customer enquiry handoff |
| Git & GitHub | Version control and project hosting |
| GitHub Pages | Optional static website deployment |

## 📁 Project Structure

The following is the expected project structure based on the referenced HTML files and asset paths. Adjust filenames to match your actual repository.

```text
FUTURE-TAX/
│
├── index.html
├── index.css
├── service.css
├── script.js
├── animation.js
├── README.md
│
└── images/
    ├── logo.png
    ├── icon.jpeg
    ├── whatsapp.png
    ├── c416a748-4700-4189-a5bd-82bf1433a9c4.jpeg
    ├── ac788f8d-2935-4b4d-b434-ced6394efcab.jpeg
    ├── 1. GST Services.jpeg
    ├── 2. TallyPrime & Accounting Services.jpeg
    ├── 3. Income Tax & TDS Support.jpeg
    ├── 4. Business Registration & MSME Support.jpeg
    ├── 5. Legal & Documentation Services.jpeg
    ├── 6. Agreements & Contracts.jpeg
    └── 7. HR & Labour Compliance Support.jpeg
```

**Important:** Ensure all image filenames and folder paths match the references in your HTML exactly, including spaces, punctuation, and capitalization.

## 🚀 Getting Started

### Prerequisites

You need:

- A modern web browser such as Chrome, Firefox, Edge, or Safari.
- A code editor such as Visual Studio Code.
- Git, if you want to manage and publish the project through GitHub.

### 1. Clone the Repository

Replace `YOUR-USERNAME` with your GitHub username and `YOUR-REPOSITORY` with your actual repository name.

https://github.com/siva-3724/TAX-SERVICE.git

### 2. Open the Project

`

Open the project folder in Visual Studio Code.

### 3. Run the Website

Open `index.html` directly in your browser, or use the **Live Server** extension in Visual Studio Code for a local development server.

### 4. Verify the Assets

Confirm that the following files exist and are linked correctly:

- `index.css`
- `service.css`
- `script.js`
- `animation.js`
- All images inside the `images/` directory

Check the browser's developer console for missing files or JavaScript errors.

## ⚙️ Configuration

### Update Website Branding

Edit the page title and metadata in `index.html`.


<title>FUTURE TAX</title>
<meta
  name="description"
  content="Accounting, GST, taxation, business registration and compliance support."
>
<link rel="icon" type="image/jpeg" href="images/icon.jpeg">
```

Update the logo and favicon paths if your filenames differ.

### Update Contact Information

Replace the placeholder contact information in the HTML with your official business details:

- Business phone number
- Email address
- WhatsApp number
- Office address or service location

### Configure WhatsApp Integration

The website includes a WhatsApp link and a consultation form intended to prepare an enquiry message.

Before publishing, update the WhatsApp number in the relevant JavaScript and HTML files to your official number, using the international country code and digits only.

Example format for an Indian number:

```text
91XXXXXXXXXX
```

The form's submission handler in `script.js` should validate the entered details, prepare the message, and open the correct WhatsApp conversation. Verify that the form actually performs these steps before publishing.

**Privacy note:** The website's WhatsApp handoff is not the same as a backend form submission. Visitors should review the prepared message and send it themselves.

## 📤 Deployment on GitHub Pages

You can host this static website using GitHub Pages.

1. Create a repository on GitHub.
2. Upload the project files and the complete `images/` folder.
3. Ensure the main HTML file is named `index.html` and is in the publishing directory.
4. Open your repository's **Settings**.
5. Navigate to **Pages**.
6. Under the build and deployment settings, select **Deploy from a branch**.
7. Select the appropriate branch, usually `main`, and the `/ (root)` folder.
8. Save the configuration and wait for the deployment to complete.
9. Open the website URL provided by GitHub Pages.

Example URL:

```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/
```

Your actual URL depends on your GitHub username, repository name, and Pages configuration.

## 🔒 Security & Privacy

- Do not collect passwords, OTPs, or unnecessary sensitive financial information through the public enquiry form.
- Do not place API keys, passwords, or private credentials in client-side JavaScript.
- Use HTTPS when hosting the website.
- Verify that external links use appropriate security attributes.
- Add a privacy policy if the website collects personal information.
- If you later add a backend or database, implement appropriate validation, access controls, and data protection measures.

## ♿ Accessibility & Performance

Recommended checks before deployment:

- Provide meaningful alternative text for images.
- Maintain readable colour contrast.
- Ensure navigation and form controls work with a keyboard.
- Respect the user's `prefers-reduced-motion` preference.
- Use lazy loading for below-the-fold images where appropriate.
- Optimise large image files to improve page load times.
- Test the layout on desktop, tablet, and mobile screen sizes.
- Confirm that all animation scripts work without blocking core page content.

## 🗺️ Future Improvements

Potential enhancements for future releases include:

- Improved mobile navigation and responsive layouts
- More accessible scroll-triggered animations
- SEO metadata and social sharing previews
- Form validation and improved error messages
- Backend integration for securely managing enquiries
- Online appointment scheduling
- Service-specific landing pages
- Testimonials and customer feedback
- Blog and tax/compliance updates
- Website analytics with appropriate privacy controls
- Performance and accessibility testing

## 🤝 Contributing

Contributions and suggestions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test the website in your browser.
5. Commit your changes with a descriptive message.
6. Open a pull request describing your improvements.

## 📄 License

No license has been specified for this project yet.

If you intend to make the source code available for reuse, choose an appropriate open-source license and add a `LICENSE` file to the repository. Until then, do not assume that others have permission to reuse or redistribute the project.

## 📞 Contact

**Future Tax — Accounting, Tax & Compliance**

- **Location:** Chennai, Tamil Nadu, India
- **Phone:** Add your official business phone number
- **Email:** Add your official business email
- **WhatsApp:** Add your official WhatsApp contact
- **Website:** Add your deployed website URL

For enquiries, use the contact form on the website and continue through WhatsApp.

---

**Built with HTML, CSS, and JavaScript for simpler accounting, taxation, and business compliance support.**

*Future Tax — Your Business. Our Expertise.*

