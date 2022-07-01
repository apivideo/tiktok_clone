export const onShare = async () => {
    const title = 'TikTok clone by api.video'
    const url = window.document.location.href
    const text = 'Take a look at how quick it is to build a tiktok clone using pwa'

    if (navigator.share) {
        try {
            await navigator.share({
                title,
                url,
                text,
            })
        } catch (err) {
            console.warn(err)
        }
    } else {
        alert('Use this application on a mobile')
    }
}
