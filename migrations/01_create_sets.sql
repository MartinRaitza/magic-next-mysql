DROP TABLE IF EXISTS `sets`;
CREATE TABLE IF NOT EXISTS `sets` (
  id VARCHAR(50) PRIMARY KEY,
  code TEXT,
  name TEXT,
  card_count INT,
  icon_svg_uri TEXT,
  released_at DATE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at 
    TIMESTAMP 
    NOT NULL 
    DEFAULT CURRENT_TIMESTAMP 
    ON UPDATE CURRENT_TIMESTAMP
);

-- {
--   "object":"set",
--   "id":"fe0dad85-54bc-4151-9200-d68da84dd0f2",
--   "code":"xln",
--   "mtgo_code":"xln",
--   "arena_code":"xln",
--   "tcgplayer_id":2043,
--   "name":"Ixalan",
--   "uri":"https://api.scryfall.com/sets/fe0dad85-54bc-4151-9200-d68da84dd0f2",
--   "scryfall_uri":"https://scryfall.com/sets/xln",
--   "search_uri":"https://api.scryfall.com/cards/search?order=set\u0026q=e%3Axln\u0026unique=prints",
--   "released_at":"2017-09-29",
--   "set_type":"expansion",
--   "card_count":289,
--   "printed_size":279,
--   "digital":false,
--   "nonfoil_only":false,
--   "foil_only":false,
--   "block_code":"xln",
--   "block":"Ixalan",
--   "icon_svg_uri":"https://c2.scryfall.com/file/scryfall-symbols/sets/xln.svg?1613970000"
-- }