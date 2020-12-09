import React, { useState, useEffect } from 'react';
import '../css/odds-calc.css';
import Card from "@heruka_urgyen/react-playing-cards"
import {CardGroup, OddsCalculator} from 'poker-odds-calculator';


const OddsCalc = () => {
    const players = [{name: 'Player 1', odds: 0.00}, {name: 'Player 2', odds: 0.00}, {name: 'Player 3', odds: 0.00}, {name: 'Player 4', odds: 0.00}]
    const suits = ["c", "d", "s", "h"]
    const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"]
    const [usedCards, setUsedCards] = useState([]);
    const [selectView, setSelectView] = useState(false) 
    const [currentCard, setCurrentCard] = useState()
    const [cardSize, setCardSize] = useState();
    const [odds, setOdds] = useState()
    const [calcBoard, setCalcBoard] = useState('')
    const [player1Cards, setPlayer1Cards] = useState('')
    const [player2Cards, setPlayer2Cards] = useState('')
    const [player3Cards, setPlayer3Cards] = useState('')
    const [player4Cards, setPlayer4Cards] = useState('')
    const [board, setBoard] = useState({
        'tableCard1': '?',
        'tableCard2': '?',
        'tableCard3': '?',
        'tableCard4': '?',
        'tableCard5': '?',
        'Player 1 card1': '?',
        'Player 1 card2': '?',
        'Player 2 card1': '?',
        'Player 2 card2': '?',
        'Player 3 card1': '?',
        'Player 3 card2': '?',
        'Player 4 card1': '?',
        'Player 4 card2': '?',
    });

    const cardCollection = () => {
        const cards = []
        for (let suit of suits) {
            for (let rank of ranks) {
                if (!usedCards.includes(`${rank}${suit}`)) {
                    cards.push({jsx: <Card value={`${rank}${suit}`} deckType="big-face" card={`${rank}${suit}`} height={"75px"} />, id: `${rank}${suit}`})
                }
            }
        }
        return cards
    }

    const handleSelectCardClick = (e) => {
        const newUsed = [...usedCards, e.target.parentNode.id]
        setUsedCards(newUsed)
        const currentBoard = board
        currentBoard[currentCard] = <Card deckType="big-face" card={e.target.parentNode.id} height={`${cardSize}px`} />
        setBoard(currentBoard)
        setSelectView(false)
        if (cardSize === "125") {
            const newBoard = CardGroup.fromString(calcBoard + e.target.parentNode.id)
            setCalcBoard(newBoard)
            console.log(calcBoard)
        }else {
            // console.log(currentCard.split(" ")[1])
            if (currentCard.split(" ")[1] == 1) {
                const newHand = CardGroup.fromString(player1Cards + e.target.parentNode.id)
                setPlayer1Cards(newHand)
                console.log(player1Cards)
            }else if (currentCard.split(" ")[1] == 2) {
                const newHand = CardGroup.fromString(player2Cards + e.target.parentNode.id)
                setPlayer2Cards(newHand)
            }
            else if (currentCard.split(" ")[1] == 3) {
                const newHand = CardGroup.fromString(player3Cards + e.target.parentNode.id)
                setPlayer3Cards(newHand)
            }else {
                const newHand = CardGroup.fromString(player4Cards + e.target.parentNode.id)
                setPlayer4Cards(newHand)
            }
        }
    }

    const handleCalcCardClick = (e) => {
        setSelectView(true)
        setCurrentCard(e.target.id)
        if (e.target.id.includes('Player')) {
            setCardSize("60")
        }else {
            setCardSize("125")
        }
    }

    const calculateOdds = () => {
        let playersArray = []
        if (player1Cards.length > 0) playersArray.push(player1Cards);
        if (player2Cards.length > 0) playersArray.push(player2Cards);
        if (player3Cards.length > 0) playersArray.push(player3Cards);
        if (player4Cards.length > 0) playersArray.push(player4Cards);
        const result = OddsCalculator.calculate(playersArray, calcBoard);
        setOdds(result)
    }

    useEffect(() => {
        if (calcBoard.length === 0 || calcBoard.length === 3 || calcBoard.length === 4|| calcBoard.length === 5)
        calculateOdds()
    }, [player1Cards, player2Cards, player3Cards, player4Cards, calcBoard])

    return (
        <div className="odds-calc-container">
            {selectView && (
                <div className="card-select-container">
                {cardCollection().map(card => (
                    <div key={card.id} onClick={handleSelectCardClick} id={card.id} className="card-select-card">   
                        {card.jsx}
                    </div>))}
                </div>)}
            {(!selectView && (
                <>
                    <div className="odds-calc-table-container">
                        <div className="odds-calc-table">
                            <div id="tableCard1" onClick={handleCalcCardClick} className="table-card-1">{board["tableCard1"]}</div>
                            <div id="tableCard2" onClick={handleCalcCardClick} className="table-card-2">{board["tableCard2"]}</div>
                            <div id="tableCard3" onClick={handleCalcCardClick} className="table-card-3">{board["tableCard3"]}</div>
                            <div id="tableCard4" onClick={handleCalcCardClick} className="table-card-4">{board["tableCard4"]}</div>
                            <div id="tableCard5" onClick={handleCalcCardClick} className="table-card-5">{board["tableCard5"]}</div>
                        </div>
                    </div>
                    <div className="player-hands-container">
                        {players.map(player => (
                            <div key={player.name} className="player-row-div">
                                <div className="player-row-name">
                                    {player.name}
                                </div>
                                <div className="player-row-cards-container">
                                    <div id={`${player.name} card1`} onClick={handleCalcCardClick} className={`player-card`}>{board[`${player.name} card1`]}</div>
                                    <div id={`${player.name} card2`} onClick={handleCalcCardClick} className={`player-card`}>{board[`${player.name} card2`]}</div>
                                </div>
                                <div className="player-row-odds">
                                    {odds && odds.equities[player.name.split(" ")[1] - 1] ? `${odds.equities[player.name.split(" ")[1] - 1].getEquity()}%` : '0%'}
                                </div>
                            </div>
                        ))}
                    </div>
                </>))}
        </div>
    );
};

export default OddsCalc;

{/* <Card deckType="big-face" card={"Kc"} height="125px" /> */}
{/* <Card deckType="big-face" card={"Qc"} height="60px" /> */}