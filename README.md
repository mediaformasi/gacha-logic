# gacha-logic
Penerapan Weighted PRNG dengan studi kasus yakni Japanese Style Gacha. Untuk test, cukup ketik `node index` saja. Ini adalah versi simple dari branch master di repository ini.

## Card Table
Card Table dalam projcet ini berada bersama dengan Readme ini. Sementara ini, list kartunya adalah:

ID | Nama Idol | Franchise | Rarity | Costume | Event (Boolean)
-- | --------- | --------- | ------ | ------- | ---------------
IMCG001 | Shibuya Rin | THE IDOLM@STER: Cinderella Girls | R | Normal Costume | False
IMCG002 | Shibuya Rin | THE IDOLM@STER: Cinderella Girls | SR | New Generation Series Costume | False
IMCG003 | Shibuya Rin | THE IDOLM@STER: Cinderella Girls | SSR | Wonderful Magic Series Costume | True
IMCG004 | Uzuki Shimamura | THE IDOLM@STER: Cinderella Girls | R | Normal Costume | False
IMCG005 | Uzuki Shimamura | THE IDOLM@STER: Cinderella Girls | SR | New Generation Series Costume | False
IMCG006 | Uzuki Shimamura | THE IDOLM@STER: Cinderella Girls | SSR | Wonderful Magic Series Costume | True
IMCG007 | Mio Honda | THE IDOLM@STER: Cinderella Girls | R | Normal Costume | False
IMCG008 | Mio Honda | THE IDOLM@STER: Cinderella Girls | SR | New Generation Series Costume | True
IMCG009 | Mio Honda | THE IDOLM@STER: Cinderella Girls | SSR | Wonderful Magic Series Costume | False
LLSP001 | Honoka Kousaka | Love Live! School Idol Project | R | Normal Costume | False
LLSP002 | Honoka Kousaka | Love Live! School Idol Project | SR | Promo Costume | True
LLSP003 | Honoka Kousaka | Love Live! School Idol Project | SSR | Future Style Costume | False
LLSP004 | Umi Sonoda | Love Live! School Idol Project | R | Normal Costume | False
LLSP005 | Umi Sonoda | Love Live! School Idol Project | SR | Promo Costume | False
LLSP006 | Umi Sonoda | Love Live! School Idol Project | SSR | Wonderland Costume | True
LLSP007 | Kotori Minami | Love Live! School Idol Project | R | Normal Costume | False
LLSP008 | Kotori Minami | Love Live! School Idol Project | SR | Promo Costume | False
LLSP009 | Kotori Minami | Love Live! School Idol Project | SSR | Sky Costume | True
IMML001 | Fuka Toyokawa | THE IDOLM@STER: Million Live! | R | Normal Costume | False
IMML002 | Fuka Toyokawa | THE IDOLM@STER: Million Live! | SR | Nurse Costume | False
IMML003 | Fuka Toyokawa | THE IDOLM@STER: Million Live! | SSR | Real Idol Series Costume | True
IMML004 | Rio Momose | THE IDOLM@STER: Million Live! | R | Normal Costume | False
IMML005 | Rio Momose | THE IDOLM@STER: Million Live! | SR | Chef Costume | False
IMML006 | Rio Momose | THE IDOLM@STER: Million Live! | SSR | Real Idol Series Costume | True
IMML007 | Takane Shijou | THE IDOLM@STER: Million Live! | R | Normal Costume | False
IMML008 | Takane Shijou | THE IDOLM@STER: Million Live! | SR | Pirate Costume | True
IMML009 | Takane Shijou | THE IDOLM@STER: Million Live! | SSR | Real Idol Series Costume | False
LLSS001 | Tsushima Yoshiko | Love Live! Sunshine!! | R | Normal Costume | False
LLSS002 | Tsushima Yoshiko | Love Live! Sunshine!! | SR | Halloween Costume | True
LLSS003 | Tsushima Yoshiko | Love Live! Sunshine!! | SSR | Punk Rock Style Costume | False
LLSS004 | Watanabe You | Love Live! Sunshine!! | R | Normal Costume | False
LLSS005 | Watanabe You | Love Live! Sunshine!! | SR | Wedding Costume | False
LLSS006 | Watanabe You | Love Live! Sunshine!! | SSR | Wonderful Stories Costume | True
LLSS007 | Sakurachi Riko | Love Live! Sunshine!! | R | Normal Costume | False
LLSS008 | Sakurachi Riko | Love Live! Sunshine!! | SR | Promo Costume | False
LLSS009 | Sakurachi Riko | Love Live! Sunshine!! | SSR | China Dress Costume | True

*Butuh kontributor untuk mengisi di dalam file JSONnya, karena wawasan saya kurang luas di dunia per-idolan. Kalau bisa sekalian edit tablenya kalau nambahin idolnya yah. Untuk event terserah kalian.*

*(C) 2018 - Lingkarya Media Formasi - Ikramullah Latif (skymunn)*