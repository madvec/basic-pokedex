import React, { Component } from 'react';
import classes from './Modal.module.css';
import Type from '../../Attributes/Type'
import Aux from '../../../hoc/Auxiliar';
import Backdrop from '../Backdrop/Backdrop';
import Abilities from '../../Attributes/Abilities';
import Thumbs from '../../Attributes/Thumbs';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }


    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: this.props.show ? '1' : '0'
                    }}>
                    <div className={classes.ModalContent}>
                        <div className={classes.Title}>{this.props.children}</div>
                        <div className={classes.Thumbs}>
                            <Thumbs thumbs={this.props.thumbs} name={this.props.children}>asd</Thumbs>
                        </div>
                        <div className={classes.Wrapper}>
                            <div className={classes.WrapperHalf}>
                                <p>Type</p>
                                <Type types={this.props.types}></Type>
                            </div>
                            <div className={classes.WrapperHalf}>
                                <p>Abilities</p>
                                <Abilities abilities={this.props.abilities}></Abilities>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default Modal;