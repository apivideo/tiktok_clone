import Video from '@api.video/nodejs-client/lib/model/Video'

export const getSocialResults = (video: Video, key: string) => {
    const randomSocialResult = Math.floor(Math.random() * 1000)
    const currentSocialResult = video?.metadata && video?.metadata.filter((el) => el.key === key)
    const filterSocialResult = currentSocialResult && currentSocialResult[0]?.value

    return filterSocialResult ? +filterSocialResult : randomSocialResult
}
