

import { A_A } from './A.js'
import { B_B } from './B.js'

function C() {
    A_A()
    B_B()

    console.log("CC")
}

// export {
//     C
// }
//默认导出， 
export default C 