import { View, Text, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import styles from './NewsCard.style'

const NewsCard = ({ articles, onPress }) => {

    const link = () => {
        Linking.openURL(articles.url)
    }

    return (
        <TouchableOpacity
            onPress={link}
            style={styles.container}
        >
            <Text style={styles.author}>{articles.author}</Text>
            <Text style={styles.title}>{articles.title}</Text>
            <Text style={styles.publishedAt}>{articles.publishedAt}</Text>
        </TouchableOpacity>



    )
}

export default NewsCard

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