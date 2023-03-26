import PageClass from './pageClass'
import HomePageView from '../views/HomePageViews.jsx'

class HomePage extends PageClass{
    render(){
        return HomePageView(this)
    }
}

export default HomePage
