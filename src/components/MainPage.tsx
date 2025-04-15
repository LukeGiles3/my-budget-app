import CenterPanel from './CenterPanel/CenterPanel'
import LeftPanel from './LeftPanel/LeftPanel'
import RightPanel from './RightPanel/RightPanel'
import './main.css'

function MainPage() {
  return (
    <>
        <div className="flexSpaceBetween">
            <LeftPanel />
            <CenterPanel />
            <RightPanel />
        </div>
    </>
  )
}

export default MainPage