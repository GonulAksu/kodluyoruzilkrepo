import React from 'react'
import '@testing-library/jest-dom'
import {render,screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import App from '../App'
import emojiList from '../emojiList.json';

describe('Emoji tests of components', () => {

    let bslk,searchEmoji,Emoji;
    beforeEach(()=>{
        render(<App/>)
        // simdi başlığı alalım
        bslk=screen.getByText("Emoji Search");
        // inputu alalım
        searchEmoji = screen.getByLabelText("inputTest")

        // bir emoji alalım kopyalandıgını kontrol etmek için
        Emoji=screen.getByText("Bamboo");
    })
    test('bslk render ediliyor mu', () => {

        expect(bslk).toBeInTheDocument();
    })
    
    test('emoji list render ediliyor mu', () => {
        const List = emojiList.slice(0, 20);
        List.map((item) => {
            expect(screen.getByText(item.title)).toBeInTheDocument();
        })
    })
    
    test('filtreleme', () => {
        const value = "Grinning"
        userEvent.type(searchEmoji,value)
        expect(screen.getByText(value)).toBeInTheDocument();
    })
    
    test('copy emoji', () => {
        userEvent.click(Emoji)
        expect(Emoji.parentElement.getAttribute("data-clipboard-text")).toMatch("🎍")
    })
    
    

})

