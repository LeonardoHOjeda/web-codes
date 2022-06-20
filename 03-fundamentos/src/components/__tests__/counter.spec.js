import { shallowMount } from '@vue/test-utils'
import Counter from '../Counter.vue';
import { it, describe, expect, test, beforeEach } from 'vitest';

describe('Counter Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Counter)
    })


    // test('Debe de hacer match con el snapshot', () => {
    //     const wrapper = shallowMount(Counter)
    //     expect(wrapper.html()).toMatchSnapshot()
    // })

    test('h2 debe de tener el valor por defecto "Counter"', () => {
        expect(wrapper.find('h2').exists()).toBeTruthy()
        const h2 = wrapper.find('h2')
        expect(h2.text()).toBe('Counter')
    })

    test('El valor por defecto debe de ser 100 en el p', () => {
        //pTags
        const pValue = wrapper.find('[data-testid="counter"]')

        //Expect segundo p === 100
        expect(pValue.text()).toBe('100')
    })

    test('Debe de incrementar y decrementar en 1 el valor del contador', async() => {
        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')

        await increaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const value = wrapper.find('[data-testid="counter"]').text()
        expect(value).toBe('99')
    })

    test('Debe de establecer el valor por defecto', () => {
        const { start } = wrapper.props()
        const value = wrapper.find('[data-testid="counter"]').text()
        expect(Number(value)).toBe(start);
    })

    test('Debe de mostrar la prop title', () => {
        const title = 'Hola Mundo!!!!'

        const wrapper = shallowMount(Counter, {
            props: {
                title,
                start: '100'
            }
        })
        expect(wrapper.find('h2').text()).toBe(title)
        console.log(wrapper.html());
    })
})