import stateMenu from './menus'
import stateHistory from './history'
import memberHistory from './member'
const state = {
  ...stateMenu,
  ...stateHistory,
  ...memberHistory
}
export default state
