import { shallowMount } from "@vue/test-utils";
import { describe, beforeEach, expect, test, vitest } from "vitest";
import Indecision from '../Indecision.vue'

describe('Indecision Component', () => {
    let wrapper
    let clgSpy

    global.fetch = vitest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forcer: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
        })
    }))

    beforeEach(() => {
        wrapper = shallowMount(Indecision)
        clgSpy = vitest.spyOn(console, 'log')
        vitest.clearAllMocks()
    })

    test('Debe de hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Escribir en el input no debe de disparar nada (console.log)', async() => {
        const getAnswerSpy = vitest.spyOn(wrapper.vm, 'getAnswer')
        const input = wrapper.find('input')
        await input.setValue('Hola Mundo')
        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).toHaveBeenCalledTimes(0)
    })

    test('Escribir el simbolo de "?", debe de disparar el getAnswer', async() => {
        const getAnswerSpy = vitest.spyOn(wrapper.vm, 'getAnswer')
        const input = wrapper.find('input')
        await input.setValue('Hola Mundo?')
        expect(getAnswerSpy).toHaveBeenCalled()

    })

    test('pruebas en getAnswer', async() => {
        await wrapper.vm.getAnswer()
        const img = wrapper.find('img')
        expect(img.exists()).toBeTruthy()
        expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif')
        expect(wrapper.vm.answer).toBe('yes')

        console.log(wrapper.vm.img)
        console.log(wrapper.vm.answer)
    })

    test('pruebas en getAnswer - Fallo en el API', async() => {

        //TODO: Fallo del API
        fetch.mockImplementationOnce(() => Promise.reject('API is Down'))

        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')

        expect(img.exists()).toBeFalsy()
        expect(wrapper.vm.answer).toBe('No se pudo cargar el API')

    })
})