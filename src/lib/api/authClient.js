const SPOTIFY_AUTH_URL = 'https://api.spotify.com/v1'
const BASE_URL = 'https://spotify23.p.rapidapi.com'

const options = {
    method: 'GET',
    headers: {
        Authorization: 'Bearer BQBzk0m8Q_mc5czlnz1eY8mRwgJdNcgWxys8XnOFAmNq-KoQmpYoDlrZW60cnUmoVh1ihplgk67Fjdz0LWrPCrqAD56dclmKOx6hCngrJN1wM9ykFb2L--45K0P7fHP7NdZ97p6-bao',
        
    }
}
const options2 = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '6d5d13f287mshd7229a7987f29f2p1947edjsn3acc82e27c4c',
	'x-rapidapi-host': 'spotify23.p.rapidapi.com'
    }
}    

export const SearchMusic = async (params) => {
    const res = await fetch(`${SPOTIFY_AUTH_URL}/search?${params}`, options)    
    const result = await res.json();
    console.log(result)
    return result; 
}

export const ExploreMusic = async () => {
	const res = await fetch(`${BASE_URL}/browse_all/`, options2)
	const result = await res.json();
	console.log(result)
	return result;
}
export const RadioContent = async () => {
    const res = await fetch(`${BASE_URL}/seed_to_playlist/?uri=spotify%3Aartist%3A2w9zwq3AktTeYYMuhMjju8`, options2)
    const result = await res.json();
    console.log(result)
    return result;
}
export const SearchMusics = async (params) => {   
    const res = await fetch(`${BASE_URL}/search/?${params}`, options2)  	
    const result = await res.json();
	console.log(result.message)
    return result;  
}
export const ArtistsContent = async () => {
    const res = await fetch(`${SPOTIFY_AUTH_URL}/search?q=lil tjay&type=artist`, options)    
    const result = await res.json();
    console.log(result)
    return result; 
}
export const AlbumContent = async () => {
    const res = await fetch(`${SPOTIFY_AUTH_URL}/search?q=lil tjay&type=album`, options)    
    const result = await res.json();
    console.log(result)
    return result; 
}
export const PopularContent = async () => {
    const res = await fetch(`${SPOTIFY_AUTH_URL}/search?q=lil tjay&type=show`, options)    
    const result = await res.json();
    console.log(result)
    return result; 
}
