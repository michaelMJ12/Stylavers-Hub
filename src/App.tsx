import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Discover from './components/Discover';
import Social from './components/Social';
import Costume from './components/Costume';
import Dashboard from './components/Dashboard';
import UpgradeDashboard from './components/UpgradeCardDashboard';
import ProductPickerDasboard from './components/CreateProductDashboard';
import AnalysisDashboard from './components/AnalysisDashboard';
import ListingDashboard from './components/ListingDashboard';
import StoreDashboard from './components/StoreDashboard';




function App() {
  

  return (
    <>
      <Router >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Discover />} />
        <Route path="/social" element={<Social />} />
        <Route path="/costume" element={<Costume />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/upgrade" element={<UpgradeDashboard/>}/>
        <Route path='/create' element={<ProductPickerDasboard/>}/>
        <Route path='/analytics' element={<AnalysisDashboard/>} />
        <Route path='/listing' element={<ListingDashboard/>} />
        <Route path='/store' element={<StoreDashboard/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
