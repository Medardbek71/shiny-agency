import {sum} from './index'
import {test,expect} from 'vitest'

test( 'ma fonction somme',()=>{
    const result  = sum(7,1)
    expect(result).toBe(8)
})