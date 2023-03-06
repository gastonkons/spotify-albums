import SpotifySearchHistory from "../models/spotifySearchHistory"
import type { SearchHistoryNonCreated } from "../types"

export async function createSpotifySearchHistory( { searchHistory }: { searchHistory: SearchHistoryNonCreated} ) {
  return await SpotifySearchHistory.create( searchHistory )
}