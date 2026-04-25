import { redirect } from "next/navigation";

const defaultCategoryId = '01'; // Default category ID to redirect to

const Home = async () => {
  redirect(`category/${defaultCategoryId}`)
}

export default Home;