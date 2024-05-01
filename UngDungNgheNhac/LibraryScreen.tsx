import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Music from './Class/Music';
import MusicPlaylist from './Class/MusicPlayList';

const playlists = [
    new MusicPlaylist("Dia nhac so 1"),
    new MusicPlaylist("Dia nhac so 2"),
    new MusicPlaylist("Dia nhac so 3"),
    "Tạo Danh Sách Nhạc",
];

const musicRecnt = [
    new Music("Điều còn lại", "Phùng Khánh Linh", "3:30", require('./assets/dieuconlai.jpg')),
    new Music("Anh chưa thương em đến vậy đâu", "Lady Mây", "4:00", require('./assets/anhchuathuongemdenvaydau.jpg')),
    new Music("Trót Yêu", "Trung Quân Idol", "3:25", require('./assets/trotyeu.jpg')),
    new Music("Từng Là", "Vũ Cát Tường", "3:15", require('./assets/tungla.jpg')),
]

playlists.forEach(playlist => {
    if (!(playlist instanceof MusicPlaylist)) return; // Skip non-playlist items
    playlist.addMusic("Điều còn lại", "Phùng Khánh Linh", "3:30", require('./assets/tungla.jpg'));
    playlist.addMusic("Anh chưa thương em đến vậy đâu", "Lady Mây", "4:00", require('./assets/anhchuathuongemdenvaydau.jpg'));
    playlist.addMusic("Trót Yêu", "Trung Quân Idol", "3:25", require('./assets/trotyeu.jpg'));
    playlist.addMusic("Từng Là", "Vũ Cát Tường", "3:15", require('./assets/tungla.jpg'));
});


export default function LibraryScreen({ navigation }) {
    const handleItemPress = (item) => {
        console.log('Item pressed:', item);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleItemPress(item)} style={styles.itemPlayList}>
            {typeof item === 'string' ? (
                <View style={{ alignItems: 'center' }}>
                    <Icon name='add-circle-outline' color={'#A307CA'} size={60} />
                    <Text style={styles.textItem} numberOfLines={2}>Tạo Danh Sách Nhạc</Text>
                </View>
            ) : (
                <View style={{ alignItems: 'center' }}>
                    <Icon name='album' color={'#A307CA'} size={60} />
                    <Text style={styles.textItem} numberOfLines={2}>{item.name}</Text>
                </View>
            )}
        </TouchableOpacity>
    );

    const recentItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleItemPress(item)} style={styles.itemRecent}>
            <Image source={item.image} style={styles.musicImage} />
            <View style={styles.textContainer}>
                <Text style={styles.textMusic} numberOfLines={2}>{item.title}</Text>
                <Text style={styles.textMusic} numberOfLines={1}>{item.artist}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>My Library</Text>

            <FlatList
                data={playlists}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
                horizontal={true}
                style={{ height: 1 }}
            />

            <Text style={styles.recentText}>Recent</Text>

            <FlatList
                data={musicRecnt}
                renderItem={recentItem}
                keyExtractor={(item) => item.title}
                style={{ height: 300 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#080C0F',
    },
    //Anh cua nhac
    musicImage: {
        width: 70,
        height: 70,
        // borderRadius: 50,
    },
    //item trong playlist
    itemPlayList: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        width: 130,
        height: 130,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    //css cua thuoc tinh recent
    itemRecent: {
        flexDirection: 'row',
        padding: 10,
        marginBottom: 30,
        marginVertical: 8,
        marginHorizontal: 16,
        borderColor: 'gray',
        // borderWidth: 1,
        borderTopWidth: 0.4,
        borderBottomWidth: 0.4,
        // borderRadius: 10,
    },
    //css cua My Library
    headerText: {
        textAlign: 'center',
        fontSize: 32,
        color: 'white',
        marginTop: 16,
        marginBottom: 16,
    },
    //css cua chu trong item danh sach nhac
    textItem: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    //style chu trong nhac
    textMusic: {
        color: 'white',
        fontSize: 16,
    },
    //kieu chu cua tieu de recent
    recentText: {
        color: 'white',
        fontSize: 20,
        marginLeft: 16,
    }
});