import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, Modal, Button, Alert, PanResponder } from 'react-native';
import { Card, Icon, Rating, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite, postComment } from '../redux/ActionCreators'; 
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        favorites: state.favorites,
    }
}

const mapDispatchToProps = dispatch => ({
    postFavorite: (dishId) => dispatch(postFavorite(dishId)),
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment))
});


function RenderDish(props) {
    const dish = props.dish;

    handleViewRef = ref => this.view = ref;

    const recognizeDrag = ({ moveX, moveY, dx, dy }) => {
        if( dx < -200 )
            return true;
        else
            return false;
    };

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (e, gestureState) => {
            return true;
        },
        onPanResponderGrant: () => {
            this.view.rubberBand(1000)
                .then(endState => console.log(endState.finished ? 'finished' : 'cancelled' ))
        },
        onPanResponderEnd: (e, gestureState) => {
            if (recognizeDrag(gestureState))
                Alert.alert(
                    'Add to Favorites?',
                    'Are you sure you wish to add ' + dish.name + ' to your favorites?',
                    [
                        {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel'
                        },
                        {
                            text: 'OK',
                            onPress: () => props.favorite ? console.log('Already favorite') : props.onPress() 
                        }
                    ],
                    { cancelable: false }
                )
            return true;
        }
    });

    if (dish != null) {
        return(
            <Animatable.View animation="fadeInDown" duration={2000} delay={1000}
            ref={this.handleViewRef}
                {...panResponder.panHandlers}
            >
                <Card
                    featuredTitle={dish.name}
                    image={{ uri: baseUrl + dish.image }}
                >  
                    <Text style={{margin: 10}}>
                        {dish.description}    
                    </Text>
                    <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Icon 
                            raised
                            reverse
                            name={ props.favorite ? 'heart' : 'heart-o' }
                            type='font-awesome'
                            color='#f50'
                            onPress={() => props.favorite ? console.log('Already favorite') : props.onPress() } 
                        /> 
                        <Icon
                            raised
                            reverse
                            name='pencil'
                            type='font-awesome'
                            color='#512DA8'
                            onPress={() => props.toggleModal()}
                        />
                    </View>
                </Card>
            </Animatable.View>
        );
    }

    else {
        return(<View></View>);
    }
}

function RenderComments(props) {
    const comments = props.comments;

    const renderCommentItem = ({ item, index }) => {
        return(
            <View key={index} style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.comment}</Text>
                <View style={{alignItems: 'flex-start', justifyContent:'space-evenly'}}>
                <Rating
                    startingValue={item.rating}
                    readonly={true}
                    imageSize={12}
                />
                </View>
                <Text style={{fontSize: 12}}>{'-- ' + item.author + ', ' + item.date}</Text>
            </View>    
        );
    }

    return(
        <Animatable.View animation="fadeInUp" duration={2000} delay={1000}>
            <Card title="Comments">
                <FlatList
                    data={comments}
                    renderItem={renderCommentItem}
                    keyExtractor={item => item.id.toString()}
                />
            </Card>
        </Animatable.View>
    );
}

class Dishdetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            rating: 1,
            author: '',
            comment: ''
        }
    }

    toggleModal() {
        this.setState({ showModal: !this.state.showModal });
    }

    markFavorite(dishId) {
        this.props.postFavorite(dishId);
    }

    static navigationOptions = {
        title: 'Dish Details'
    };

    resetForm() {
        this.setState({ 
            rating: 1,
            author: '',
            comment: ''
        });
        this.toggleModal();
    }

    handleComment(dishId) {
        console.log("Dish Id:" + dishId + this.state);
        this.props.postComment(dishId, this.state.rating, this.state.author, this.state.comment);
        this.resetForm();
    }

    render() {
        const dishId = this.props.navigation.getParam('dishId','');

        return(
            <ScrollView>
                <RenderDish dish={this.props.dishes.dishes[+dishId]} 
                    favorite={this.props.favorites.some(el => el === dishId)}
                    onPress={() => this.markFavorite(dishId)}
                    toggleModal={() => this.toggleModal()}
                />
                <RenderComments comments={this.props.comments.comments.filter((comment) => comment.dishId === dishId)} />
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.showModal}
                    onDismiss={() => {this.toggleModal();}}
                    onRequestClose={() => {this.toggleModal();}}
                >
                    <View>
                        <Rating
                            showRating
                            startingValue={1}
                            style={{ paddingVertical: 10 }}
                            onFinishRating={(value) => this.setState({ rating: value })}
                        />
                        <Input
                            placeholder='Author'
                            leftIcon={
                                <Icon
                                    name='user-o'
                                    type='font-awesome'
                                    size={24}
                                />
                            } 
                            onChangeText={(value) => this.setState({ author: value })}
                        />
                        <Input
                            placeholder='Comment'
                            leftIcon={
                                <Icon
                                    name='comment-o'
                                    type='font-awesome'
                                    size={24}
                                />
                            } 
                            onChangeText={(value) => this.setState({ comment: value })}
                        />
                        <Button
                            onPress={() => {this.handleComment(dishId);}}
                            color='#512DA8'
                            title='Submit'
                        /> 
                        <View style={{marginVertical: 8}} />
                        <Button
                            onPress={() => {this.resetForm();}}
                            color="#808080"
                            title="Cancel"
                        />
                    </View>
                </Modal>
            </ScrollView>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dishdetail);