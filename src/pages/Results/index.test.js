import { formatJobList } from './'
import { it, expect, describe } from 'vitest'

describe('la fonction formatJobList',()=>{
    it('should have a comma to end',()=>{
        const expectedState = 'item2,'
        expect(formatJobList('item2', 3 , 1)).toEqual(expectedState)
    })
    it('should not have a comma to end',()=>{
        const expectedState = 'item3'
        expect(formatJobList('item3', 3 , 2)).toEqual(expectedState)
    })
})