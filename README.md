# alx-project-0x14

## API Overview
**The Movie Database (TMDb) API** is a robust RESTful service that delivers comprehensive movie, TV show, and celebrity data. It offers rich features like advanced search, multimedia assets (images/videos), multi-language support, community-contributed reviews and lists, and metadata such as cast, crew, genres, and more :contentReference[oaicite:0]{index=0}.

## Version
As of today, the stable version is **v3**, with an upcoming **v4** in progress :contentReference[oaicite:1]{index=1}.

## Available Endpoints
### Endpoints commonly used in TMDb API:
- **Configuration** – Retrieves static configuration data (e.g., image base URLs).
- **Movies** –
  - `GET /movie/{movie_id}` – Movie details
  - `GET /movie/{movie_id}/credits` – Cast and crew information
  - `GET /movie/upcoming` – Upcoming releases
  - `GET /movie/now_playing` – Films currently in theaters
  - `GET /movie/popular` – Popular titles
- **TV Shows**, **People**, **Search** (e.g., `search/movie`, `search/person`, `search/tv`), **Genres**, **Reviews**, **Recommendations**, etc. :contentReference[oaicite:2]{index=2}

## Request and Response Format
### Example: Fetching Movie Details
