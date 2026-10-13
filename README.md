# NutrientValue (NæringsPris)
Spreadsheet of food that shows density per currency spent.

```

## 🛠️ Tech Stack & Architecture

*   **Frontend:** React.js, Tailwind CSS
*   **Backend:** Node.js, Express.js
*   **Database & Auth:** Session-based authentication using `bcryptjs` and a flexible database layer tailored for rapid local development.
*   **Design Pattern:** Proxy Architecture. The Express server acts as a data adapter, decoupling the React frontend entirely so external APIs can be integrated later without breaking client-side logic.

## 🚀 Development Roadmap

### Phase 1: Backend Foundations & Logic (No Database)
*   [x] Set up the Express server with CORS and environmental variables.
*   [x] Create a controlled `matdata.json` dataset with local nutritional values.
*   [x] Implement the `/api/matvarer` endpoint to process calculations on the server side.

### Phase 2: Frontend & Universal Design
*   [x] Connect React to the local Express proxy via `fetch`.
*   [ ] Build a clean, responsive dashboard using semantic HTML.
*   [ ] Perform accessibility (WCAG) checks for keyboard navigability and color contrast.

### Phase 3: Database & Authentication
*   [ ] Integrate the designated course database layer.
*   [ ] Implement secure password hashing using `bcryptjs`.
*   [ ] Set up server-side sessions to allow authenticated users to save their favorite food items.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
