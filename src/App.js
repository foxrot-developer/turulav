
import {BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages from './pages/home';
import MembersPage from './pages/members';
import ProfilePage from './pages/profile';
import LoginPage from './pages/login';
import SignInPage from './pages/signin';
import PricingPlanPage from './pages/pricingplan';
import ForeZeroPage from './pages/forezero';
import CommunityPage from './pages/community';
import BlogPage from './pages/blog';
import BlogSinglePage from './pages/blogsingle';
import ContactPage from './pages/contact';
import ScrollToTop from './component/layout/scralltop';


function App() {
	return (
		
		<div>
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<HomePages />} />
					<Route path="members" element={<MembersPage />} />
					<Route path="profile" element={<ProfilePage />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="signup" element={<SignInPage />} />
					<Route path="pricing" element={<PricingPlanPage />} />
					<Route path="*" element={<ForeZeroPage />} />
					<Route path="community" element={<CommunityPage />} />
					<Route path="blog" element={<BlogPage />} />
					<Route path="blog-single" element={<BlogSinglePage />} />
					<Route path="contact" element={<ContactPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
