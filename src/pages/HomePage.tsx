import { Box } from "@chakra-ui/react"
import { TopCompanies } from "../components/TopCompanies"
import { CompanyListing } from "../components/CompanyListing"
import { PremiumServices } from "../components/PremiumServices"

export const HomePage = () => {
  return (
    <Box>
      <TopCompanies />
      <CompanyListing />
      <PremiumServices />
    </Box>
  )
}
