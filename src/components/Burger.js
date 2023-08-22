import React, { Component } from 'react';
import './BurgerStyle.css';

export default class Burger extends Component {
    state = {
        lettuce: 0,
        tomato: 0,
        cheese: 0,
        meat: 0
    }

    addRemoveIngredient = (action, ingredient) => {
        let {
            lettuce,
            tomato,
            cheese,
            meat
        } = this.state;

        let stateValue;
        switch(ingredient){
            case 'lettuce':{
                stateValue = lettuce;
                break;
            }
            case 'tomato':{
                stateValue = tomato;
                break;
            }
            case 'cheese':{
                stateValue = cheese;
                break;
            }
            case 'meat':{
                stateValue = meat;
                break;
            }
            default: break;
        }
        if(action === 'add'){
            stateValue = stateValue + 1;
        }else{
            stateValue = stateValue - 1;
        }
        this.setState({
            [ingredient]: stateValue >= 0 ? stateValue : 0
        });
    }

    burgerContent = () => {
        let {
            lettuce,
            tomato,
            cheese,
            meat
        } = this.state;
        let burger = [];

        for (let i = 0; i < lettuce; i++){
            burger.push(<div key={burger.length} className="lettuseSide"></div>);
        }

        for (let i = 0; i < tomato; i++){
            burger.push(<div key={burger.length} className="tomatoSide"></div>);
        }

        for (let i = 0; i < cheese; i++){
            burger.push(<div key={burger.length} className="cheeseSide"></div>);
        }

        for (let i = 0; i < meat; i++){
            burger.push(<div key={burger.length} className="meatSide"></div>);
        }

        return burger;
    }

    render(){
        return (
            <>
                <div className="burgerIngredients">
                    <div className="topSide"></div>
                    {this.burgerContent()}
                    <div className="bottomSide"></div>
                </div>
                <div className="ingredientsBlock">
                    <p>Marul</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','lettuce')}>Add</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','lettuce')}>Remove</button>
                    </div>
                    <p>Domates</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','tomato')}>Add</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','tomato')}>Remove</button>
                    </div>
                    <p>Peynir</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','cheese')}>Add</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','cheese')}>Remove</button>
                    </div>
                    <p>Köfte</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','meat')}>Add</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','meat')}>Remove</button>
                    </div>
                </div>
            </>
        );
    }
}