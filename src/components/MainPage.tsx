import CenterPanel from './CenterPanel/CenterPanel'
import LeftPanel from './LeftPanel/LeftPanel'
import RightPanel from './RightPanel/RightPanel'
import './main.css'
import { GroupsProvider } from '../context/GroupsContext'

function MainPage() {
  return (
    <>
        <GroupsProvider>
          <div className="flexSpaceBetween">
              <LeftPanel />
              <CenterPanel />
              <RightPanel />
          </div>
        </GroupsProvider>
    </>
  )
}

export default MainPage
