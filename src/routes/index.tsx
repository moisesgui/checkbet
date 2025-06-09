import { Routes, Route } from "react-router-dom"
import { Layout } from "../components/Layout"
import { HomePage } from "../pages/HomePage"
import { CompanyDetailPage } from "../pages/CompanyDetailPage"
import { AboutPage } from "../pages/AboutPage"
import { ContactPage } from "../pages/ContactPage"
import { TermsPage } from "../pages/TermsPage"
import { PrivacyPage } from "../pages/PrivacyPage"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="company/:id" element={<CompanyDetailPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
      </Route>
    </Routes>
  )
}
