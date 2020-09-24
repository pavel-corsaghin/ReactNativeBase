import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BlogContext } from '../context/BlogContext';

const IndexScreen = () => {
    const blogPosts = useContext(BlogContext);
    console.log(blogPosts);

    return (
        <View>
            <Text>Index Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default IndexScreen;