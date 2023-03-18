import { FlatList, Linking, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useFetch from './hooks/useFetch'
import Loading from './components/Loading'
import Error from './components/Error'
import NewsCard from './components/NewsCard'

const App = () => {

    const { data, loading, error } = useFetch('https://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey=ba6a6c622e6e4d3cbe1007772b14fcf9')

    if (loading) { return <Loading /> }
    if (error) { return <Error /> }


    const renderNews = ({item}) => <NewsCard articles={item} onPress={null}/>

    return (
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.header_text}>Haberler Uygulaması</Text>
            <FlatList 
                data={data.articles}
                renderItem={renderNews}
            />
        </SafeAreaView>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddd',
    },
    header_text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'red',
        textAlign: 'center'
    }
})

{
    /*

    "articles": [
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "Mynet",
      "title": "İsmail Demir'den heyecanlandıran paylaşım: Milli Muharip Uçak pist başında! - Mynet",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMibGh0dHBzOi8vd3d3Lm15bmV0LmNvbS9pc21haWwtZGVtaXItZGVuLWhleWVjYW5sYW5kaXJhbi1wYXlsYXNpbS1taWxsaS1tdWhhcmlwLXVjYWstcGlzdC1iYXNpbmRhLTExMDEwNzEwNjc3OdIBcGh0dHBzOi8vd3d3Lm15bmV0LmNvbS9hbXAvaXNtYWlsLWRlbWlyLWRlbi1oZXllY2FubGFuZGlyYW4tcGF5bGFzaW0tbWlsbGktbXVoYXJpcC11Y2FrLXBpc3QtYmFzaW5kYS0xMTAxMDcxMDY3Nzk?oc=5",
      "urlToImage": null,
      "publishedAt": "2023-03-17T17:45:27Z",
      "content": null
    }
    ]

    */
}