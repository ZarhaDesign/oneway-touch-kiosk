/* Which video belongs to which catalogue kit (kit number → video file name without its 01_, 02_ order prefix).
   Used when a visitor opens a car on the kiosk: if that kit has a video, the big screen plays it.
   Hand-matched 2026-10-26. A kit not listed here shows the kit spotlight instead. */
window.ONEWAY_KITVIDEOS={
 "BK12.041":"AUDI_A3_Sedan_2017-2019",            "BK12.017":"BMW_1_Series_M-Pack_F40_2019-2024",
 "BK12.070":"VW_Golf_Mk8_5_Standart_2024+",       "BK12.042":"AUDI_A3_Sedan_2020-2024",
 "BK12.071":"BMW_3_SERIES_Sport_Line_G20_2018-2022","BK12.072":"AUDI_A4_S-Line_2019-2024",
 "BK12.060":"VW_Polo_GTI_Mk5_2009-2014",          "BK12.066":"AUDI_A4_Standart_2019-2024",
 "BK12.046":"CUPRA_Leon_2025+",                   "BK12.063":"MERCEDES_A45S_2019+",
 "BK12.065":"TESLA_Model_Y_2020-2025",            "BK12.030":"BMW_4_Series_G22_2020+",
 "BK12.084":"AUDI_Q3_Sportback_S-Line_2019-2025", "BK12.068":"VW_Tayron_R-Line_2025+",
 "BK12.038":"AUDI_Q5_S-Line_2020-2024",           "BK12.040":"BMW_4_Series_G26_Grand_Coupe_2021+",
 "BK12.047":"AUDI_Q8_S-Line_2019-2023",           "BK12.088":"BMW_5_Serisi_G60_M-Pack_2023+",
 "BK12.021":"AUDI_S3_Sedan_2013-2016",            "BK12.067":"VW_Tiguan_R-Line_2025+",
 "BK12.051":"ALFA_ROMEO_Giuilietta_2010-2020",    "BK12.080":"Skoda_Kodiaq_Sportline_2021-2023",
 "BK12.020":"AUDI_S3_Sedan_2017-2019",            "BK12.031":"BMW_M2_G87_2023+",
 "BK12.052":"AUDI_S3_Sedan_2020-2024",            "BK12.058":"VW_Tiguan_R_R-Line_2020+",
 "BK12.100":"AUDI_S3_Sedan_2025+",                "BK12.069":"BMW_Z4_2018+",
 "BK12.059":"CUPRA_Terramar_2025+",               "BK12.064":"MERCEDES_CLA45S_2019+",
 "BK12.081":"TESLA_Model_Y_2025+",                "BK12.028":"AUDI_S3_Sportback_2013-2016",
 "BK12.023":"VW_Golf_MK7_R_2013-2016",            "BK12.029":"AUDI_S3_Sportback_2017-2019",
 "BK12.050":"BMW_3_SERIES_M-PACK_G20-G21_2018-2022","BK12.076":"AUDI_S3_Sportback_2025+",
 "BK12.073":"VW_Golf_Mk8_Standart_2019-2024",     "BK12.043":"BMW_M4_2014-2021",
 "BK12.085":"AUDI_S6_2020-2024"
};

/* No video of the exact car, but one of the same model family: shown with a "similar model" label. */
window.ONEWAY_KITVIDEOS_SIMILAR={
 "BK12.074":"AUDI_S3_Sportback_2013-2016",  "BK12.057":"AUDI_S3_Sportback_2013-2016",
 "BK12.033":"AUDI_S3_Sportback_2017-2019",  "BK12.037":"AUDI_S3_Sportback_2025+",
 "BK12.016":"BMW_1_Series_M-Pack_F40_2019-2024", "BK12.032":"BMW_3_SERIES_M-PACK_G20-G21_2018-2022",
 "BK12.086":"BMW_4_Series_G26_Grand_Coupe_2021+",
 "BK12.027":"CUPRA_Leon_2025+",             "BK12.056":"CUPRA_Leon_2025+",
 "BK12.054":"VW_Golf_MK7_R_2013-2016",      "BK12.044":"VW_Golf_MK7_R_2013-2016",
 "BK12.026":"VW_Golf_Mk8_Standart_2019-2024","BK12.024":"VW_Golf_Mk8_Standart_2019-2024",
 "BK12.049":"VW_Tiguan_R_R-Line_2020+",     "BK12.025":"VW_Tiguan_R_R-Line_2020+"
};
window.ONEWAY_VIDEO_SIMILAR=function(bk){ return !(window.ONEWAY_KITVIDEOS||{})[bk] && !!(window.ONEWAY_KITVIDEOS_SIMILAR||{})[bk]; };
window.ONEWAY_VIDEO_FOR=function(bk){
  var stem=(window.ONEWAY_KITVIDEOS||{})[bk]||(window.ONEWAY_KITVIDEOS_SIMILAR||{})[bk], V=window.ONEWAY_VIDEOS||[]; if(!stem) return -1;
  for(var i=0;i<V.length;i++){ var n=decodeURIComponent(String(V[i].file).split('/').pop()).replace(/^\d+_/,'').replace(/\.[^.]+$/,''); if(n===stem) return i; }
  return -1;
};
