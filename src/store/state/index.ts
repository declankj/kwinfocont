import stateMenu from './menus'
import stateHistory from './history'
import memberHistory from './member'
import curriculumHistory from './curriculum'
const state = {
  ...stateMenu,
  ...stateHistory,
  ...memberHistory,
  ...curriculumHistory
}
export default state
