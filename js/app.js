/* ============================================================
   قائمة البطاقات المحظورة — منطق الصفحة (بحث · ترتيب · عرض)
   بيانات العملاء في ملف js/data.js
   ============================================================ */


const CUSTOMERS = [

  { type:"اشتراك شهري",             phone:"966549914480", card:"2303209461",       balance:1.05,    date:"18.07.2025", proof:"https://drive.google.com/drive/folders/1BZ2Dhw91CvMEvflahQ5A0l_nMA7dLFc2?usp=drive_link" },
  { type:"اشتراك أسبوعي",           phone:"966502885687", card:"9966001699096255", balance:3.10,    date:"30.06.2025", proof:"https://drive.google.com/drive/folders/1JThUCanrmRuMqpJw2lZgS19bEHML44g0?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966534134941", card:"9966001699077066", balance:0.45,    date:"18.06.2025", proof:"https://drive.google.com/drive/folders/1ASuPs6t_coeSNBTxL4il8bi1yvbGBxoN?usp=drive_link" },
  { type:"اشتراك أسبوعي",           phone:"966560621123", card:"9966001699101657", balance:10.80,   date:"17.07.2025", proof:"https://drive.google.com/drive/folders/1t_h4a_TNCx-_T6ftyVf-9mqKjVqHQCck?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966531932764", card:"2303209807",       balance:0.05,    date:"30.07.2025", proof:"https://drive.google.com/drive/folders/1ZPErBloi1t-45ZAUVtTjqcE1xB0xCSFl?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966537075981", card:"2303127527",       balance:0,       date:"31.07.2025", proof:"https://drive.google.com/drive/folders/1IbDUXCpeK4tZEcEGH0Q2vA8FAjAZV0L0?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966534069034", card:"9966001699027880", balance:0.15,    date:"17.08.2025", proof:"https://drive.google.com/drive/folders/1PpQYZKlDThhoy5VjmyJRKhDPmxFDJl34?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966533908500", card:"2303208998",       balance:49.30,   date:"09.09.2025", proof:"https://drive.google.com/drive/folders/1Vca0DN_RYvpV62zVWks2NmVT2oyuAWo6?usp=drive_link" },
  { type:"اشتراك أسبوعي",           phone:"966502276286", card:"9966001699054989", balance:0,       date:"14.09.2025", proof:"https://drive.google.com/drive/folders/1r7p-bY2rAV0_zBGnXeI53C78o4MX_pp_?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966573701408", card:"9966001699112416", balance:5.85,    date:"25.09.2025", proof:"https://drive.google.com/drive/folders/1WL0AvwdogaS_s2Ifx3oblw2ZqaBqMOOl?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966534895931", card:"9966001699058932", balance:2.70,    date:"23.09.2025", proof:"https://drive.google.com/drive/folders/1MRR-1h0p39SZ9kdbb6fCu4YbmXk6-1OO?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966547713938", card:"9966001699024189", balance:3.45,    date:"29.09.2025", proof:"https://drive.google.com/drive/folders/1VG9S1Ep59LeDXcjE61H_1MFxo2oTCl4a?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966539131411", card:"9966001699112246", balance:51.75,   date:"02.10.2025", proof:"https://drive.google.com/drive/folders/1hQA8HxVC78Y1boGa3urYTyAPKry07-Px?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966501093884", card:"2303209737",       balance:25.05,   date:"02.10.2025", proof:"https://drive.google.com/drive/folders/1OFt7dzLQFSbFNm5qrMyZW0Gy86BZVxiE?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966530225923", card:"9966001699080004", balance:122.60,  date:"02.10.2025", proof:"https://drive.google.com/drive/folders/1ipSqITsqS3iuEJ7K21kifSh4OLI3UCNL?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966502597149", card:"2303127538",       balance:1.20,    date:"15.10.2025", proof:"https://drive.google.com/drive/folders/1syLWEo0y3ovjsUsSZYHh2RzHglbLwiXy?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966541951729", card:"9966001699052316", balance:0.50,    date:"06.10.2025", proof:"https://drive.google.com/drive/folders/16YXjctodNOBUgEr3aK-7dN-gtNs9uZhD?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966530641842", card:"2303208798",       balance:5.10,    date:"14.10.2025", proof:"https://drive.google.com/drive/folders/1txzaJBklHEQLWWCo0pSjyJETOH5uF5zG?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966569102825", card:"9966001699104556", balance:8.10,    date:"16.10.2025", proof:"https://drive.google.com/drive/folders/1wMEqRlaJuOId_9qsHHJJGTcdIkeJAA1l?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966552137223", card:"9966001699072266", balance:0.70,    date:"16.10.2025", proof:"https://drive.google.com/drive/folders/1T0nE6HFmknJz7QdNuMdNhhtTN8C5HGT1?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966570033075", card:"9966001699105812", balance:0.65,    date:"21.10.2025", proof:"https://drive.google.com/drive/folders/1-JL1xnr-1sKtDvjCdIlz7THlNUbDnu9M?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966508408638", card:"9966001699099475", balance:3.55,    date:"03.11.2025", proof:"https://drive.google.com/drive/folders/1Cl7sTIGks0bAeTIjcKvx83wJ0he0Xx_B?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966591434334", card:"9966001699114497", balance:0,       date:"02.11.2025", proof:"https://drive.google.com/drive/folders/1IBUcSCBsnpxnfaaH4Pa0wRqRa5d1fnuk?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966533808542", card:"9966001699099891", balance:0.55,    date:"28.10.2025", proof:"https://drive.google.com/drive/folders/1eYbJTqbm6rkTrKjPWfVGeSSPh1yUQH9b?usp=drive_link" },
  { type:"اشتراك أسبوعي",           phone:"966593808696", card:"2303127549",       balance:3.75,    date:"06.11.2025", proof:"https://drive.google.com/drive/folders/1tGEUIS2Nojd2ZIyYjkqlShCc0hFXPTa4?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966575073869", card:"9966001699116154", balance:5.00,    date:"14.11.2025", proof:"https://drive.google.com/drive/folders/1T-aaT_TblgtH39IMRyhAM9-D-y_pKmiq?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966508263918", card:"9966001699093347", balance:77.15,   date:"16.11.2025", proof:"https://drive.google.com/drive/folders/18BHoM2EQLRH1OVDmQ4ySl7fwct3pYN99?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966501642859", card:"9966001699113982", balance:1.55,    date:"24.11.2025", proof:"https://drive.google.com/drive/folders/1jHSu3lC11PobrWiIc0ueElx8wYrJKk1-?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966582719616", card:"9966001699077824", balance:0,       date:"23.11.2025", proof:"https://drive.google.com/drive/folders/1m1iNGLLKYdGFjd_-WdpNZz8o1PCFiktu?usp=drive_link" },
  { type:"اشتراك أسبوعي",           phone:"966543132851", card:"9966001699111347", balance:0,       date:"18.12.2025", proof:"https://drive.google.com/drive/folders/1mLetsOSro1dbb7LYhsOd_phZhFMg0h2C?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966540387757", card:"9966001699018021", balance:0.09,    date:"21.12.2025", proof:"https://drive.google.com/drive/folders/1oLz8T9yFavUaCk5PQvqWcKWOQLt0sYnS?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966507953909", card:"2303244523",       balance:135.40,  date:"08.01.2026", proof:"https://drive.google.com/drive/folders/1Tx5y-vWpRcM1SwKTmp0LjYIKmtwnDbiN?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966563359784", card:"9966001699116914", balance:9.30,    date:"08.01.2026", proof:"https://drive.google.com/drive/folders/1ntPNtjZzlds6ji0Vjy8Quc4mOyPtk0tx?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966510694588", card:"9966001699092456", balance:0,       date:"09.01.2026", proof:"https://drive.google.com/drive/folders/1xEKpcG3J5Fd53Vqk4Onupw8pAYmmnrs2?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966593131636", card:"9966001699023896", balance:12.95,   date:"12.01.2026", proof:"https://drive.google.com/drive/folders/1iNgvLSqGNGQrN0nwuLCvQuaYl9vVg8b5?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966509060735", card:"9966001699109334", balance:8.63,    date:"14.01.2026", proof:"https://drive.google.com/drive/folders/1CRzpPVqAcdNp_VnvHYBSasCp_m7b0q6t?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966544916120", card:"9966001699108516", balance:0,       date:"19.01.2026", proof:"https://drive.google.com/drive/folders/1TaRjx0yAxGPHsQmD5SF7uiDS0lbTcHT5?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966510485820", card:"2303127529",       balance:52.55,   date:"26.01.2026", proof:"https://drive.google.com/drive/folders/1VnRBiQS7XwjnQOg1N26lFUJyvzZBJlvl?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966578496126", card:"9966001699189067", balance:0.60,    date:"26.01.2026", proof:"https://drive.google.com/drive/folders/1k5uvF2AMiNh2V3mCorPnCCtNBMrWaFJz?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966580403838", card:"9966001699114658", balance:0.20,    date:"29.01.2026", proof:"https://drive.google.com/drive/folders/1v8n610lDA_8YySOpeppnba-R86aTgTIw?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966510404750", card:"9966001699092709", balance:3.10,    date:"05.02.2026", proof:"https://drive.google.com/drive/folders/17clLHczI6Fv7sAmd6eaR735-A0cW4-KR?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966509462471", card:"9966001699116377", balance:0,       date:"03.02.2026", proof:"https://drive.google.com/drive/folders/1VsdxDgxML4h9UF0GgLEabsf-brx5dEm-?usp=drive_link" },
  { type:"بطاقة خصم طالب",          phone:"966504868627", card:"2502046537",       balance:32.08,   date:"07.02.2026", proof:"https://drive.google.com/drive/folders/1zUuGu0Tzhtx0466QoRT08sLdy647E4QT?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966558590684", card:"9966001699117928", balance:0,       date:"07.02.2026", proof:"https://drive.google.com/drive/folders/1Q2QHG8LLKebdjXD2ijPD9hHh8h8kSiVE?usp=drive_link" },
  { type:"بطاقة خصم طالب",          phone:"966504596875", card:"2502046528",       balance:15.87,   date:"13.02.2026", proof:"https://drive.google.com/drive/folders/1g9_nnvIHm8R5xGHdO5anSJEF-ybnAheS?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966538950940", card:"9966001699117469", balance:0,       date:"13.02.2026", proof:"https://drive.google.com/drive/folders/1p_RIz4jmN8WnQrX0HxmjWVw8VH87PQc7?usp=drive_link" },
  { type:"بطاقة خصم طالب",          phone:"966572825027", card:"2502046531",       balance:7.0,     date:"25.02.2026", proof:"https://drive.google.com/drive/folders/1n7PsxAbYdbR7YtPJIK7py3nOft-Mj4QY?usp=drive_link" },
  { type:"اشتراك أسبوعي",           phone:"966544242790", card:"2303127326",       balance:0,       date:"23.02.2026", proof:"https://drive.google.com/drive/folders/1cUNIQBKDdFWhIPV03daPVvI5a4H7US-S?usp=drive_link" },
  { type:"بطاقة خصم طالب",          phone:"966533178905", card:"2502046332",       balance:1.6,     date:"23.02.2026", proof:"https://drive.google.com/drive/folders/1XeduMPeVR13oRDgcqWubH-q6IveJdQWx?usp=drive_link" },
  { type:"اشتراك أسبوعي",           phone:"966557029439", card:"9966001699100657", balance:0,       date:"27.02.2026", proof:"https://drive.google.com/drive/folders/1Y1BDmLDvWFG6lav0oJzF7F_ks4a4MqvM?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966509088334", card:"9966001699117774", balance:0,       date:"28.02.2026", proof:"https://drive.google.com/drive/folders/1Z0svzb_5PvySyxSVTNcqsVeTLjgpD4b4?usp=drive_link" },
  { type:"بطاقة خصم طالب",          phone:"966552049713", card:"2502046202",       balance:2.32,    date:"26.02.2026", proof:"https://drive.google.com/drive/folders/1I5OlaCKZ0L8Qzl5gldlZ8dcsMJk_DqCt?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966580642946", card:"9966001699120567", balance:0.55,    date:"27.02.2026", proof:"https://drive.google.com/drive/folders/1glsl968jNqaHbYaFvop1zXgEq8PDefB7?usp=drive_link" },
  { type:"اشتراك أسبوعي",           phone:"966507272669", card:"2303245773",       balance:5.50,    date:"28.02.2026", proof:"https://drive.google.com/drive/folders/1T6pIO9HpUkvEE0mHMF_1M0jQp0kDtJyg?usp=drive_link" },
  { type:"بطاقة خصم طالب",          phone:"966552659199", card:"2502046346",       balance:3.08,    date:"01.03.2026", proof:"https://drive.google.com/drive/folders/1Z4kjhPuXqzPJudEbAGru2TFY1ALv0f9X?usp=drive_link" },
  { type:"اشتراك أسبوعي",           phone:"966533785918", card:"9966001699121912", balance:0,       date:"06.03.2026", proof:"https://drive.google.com/drive/folders/1i0x-hCw3E0QjJ16GlhYUAaiuX3LF7j43?usp=drive_link" },
  { type:"اشتراك أسبوعي",           phone:"966501170319", card:"9966001699121893", balance:9.20,    date:"12.03.2026", proof:"https://drive.google.com/drive/folders/1HOT7qcsYA7QvvxCAFdhxEQCb0yOu6FhP?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966561747700", card:"9966001699118904", balance:0,       date:"25.03.2026", proof:"https://drive.google.com/drive/folders/1bZ7R_E6s6CV9t_JmPpL2U9_9-RzePZR5?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966579147862", card:"2303127836",       balance:9.30,    date:"22.03.2026", proof:"https://drive.google.com/drive/folders/146qylsSWT0rPt7TMJTjpE4xm-G9uph_o?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966548107574", card:"2303208889",       balance:10.58,   date:"31.03.2026", proof:"https://drive.google.com/drive/folders/16TQJOF5AT3BpTpNdsx57Im5qi_MCvxnl?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966563704780", card:"2303127165",       balance:2.00,    date:"31.03.2026", proof:"https://drive.google.com/drive/folders/1t3N7WnDv-Y_mxWSdMp07ibul8DpVtIvS?usp=drive_link" },
  { type:"بطاقة خصم طالب",          phone:"966530762172", card:"2502046311",       balance:13.74,   date:"05.04.2026", proof:"https://drive.google.com/drive/folders/1rayouK9JvNQRbxJ4iq99MYZcYBLlofKM?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966568796976", card:"9966001699120707", balance:3.45,    date:"15.04.2026", proof:"https://drive.google.com/drive/folders/1Sve7lxtdmjowLU8n2jJzW2ZQtVU6_AEB?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966553681359", card:"9966001699117941", balance:0.95,    date:"15.04.2026", proof:"https://drive.google.com/drive/folders/1gRKcCoc9HJgXoLCXehj4N7Vl3wfS5fHR?usp=drive_link" },
  { type:"اشتراك أسبوعي",           phone:"966550113022", card:"9966001799005722", balance:0.00,    date:"22.04.2026", proof:"https://drive.google.com/drive/folders/1yD_NldHi0Z5Z10SyBc6VAPMlV4aN9SRj?usp=drive_link" },
  { type:"بطاقة خصم طالب",          phone:"966537189295", card:"2502046339",       balance:16.39,   date:"03.05.2026", proof:"https://drive.google.com/drive/folders/1UJSpcutsbYlHnHp-lSjKamGW-V0IKQRg?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966575073869", card:"9966001699183578", balance:0,       date:"29.04.2026", proof:"https://drive.google.com/drive/folders/1ZD0Jo27T66RGKVDf8oM30nG0kQyh0AL-?usp=drive_link" },
  { type:"بطاقة خصم كبار السن",     phone:"966509083184", card:"2502046225",       balance:26.21,   date:"03.05.2026", proof:"https://drive.google.com/drive/folders/1DMo-54vNCnq9HB-C5NZv9FIRUKXTPQuC?usp=drive_link" },
  { type:"بطاقة خصم طالب",          phone:"966536529862", card:"2502046541",       balance:11.84,   date:"30.04.2026", proof:"https://drive.google.com/drive/folders/1KPOvwYXL3RBmB5SpvkWiHEjxJBGZ5Odj?usp=drive_link" },
  { type:"بطاقة خصم طالب",          phone:"966569273742", card:"2502046340",       balance:11.84,   date:"13.05.2026", proof:"https://drive.google.com/drive/folders/1utrreGH6Tmz_EI7BQL126o-KJmYVFP-q?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966547824955", card:"9966001699065399", balance:1.10,    date:"17.05.2026", proof:"https://drive.google.com/drive/folders/13mzJ4iif1WBElY-Hd5eMp9P_e0-fiHeZ?usp=drive_link" },
  { type:"اشتراك أسبوعي",           phone:"966569226493", card:"9966001699031858", balance:0.40,    date:"16.05.2026", proof:"https://drive.google.com/drive/folders/1miHXHu2jZAI7zqk_2-_d_3sLT1hu4eQZ?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966549485005", card:"9966001699120932", balance:6.55,    date:"20.05.2026", proof:"https://drive.google.com/drive/folders/1ubnub8Ba87O1kVWn47DKYuIAu9vwGT6Q?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966537635371", card:"9966001699110114", balance:0.15,    date:"26.05.2026", proof:"https://drive.google.com/drive/folders/1V4IC1kDvLneLKsOI4UqTbn9D5QouSs5K?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966531499490", card:"9966001699072174", balance:39.15,   date:"08.06.2026", proof:"https://drive.google.com/drive/folders/16mX1SYY3i_QlnPiki4xdBn2Xy9Pk5P-V?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966570819108", card:"9966001699116540", balance:0.45,    date:"18.06.2026", proof:"https://drive.google.com/drive/folders/1DPdomkYzHJKC52NWnxXWlgOvwJFj97Cu?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966582886229", card:"2303139474",       balance:0,       date:"12.06.2026", proof:"https://drive.google.com/drive/folders/1Y1H2i8w4UQqJXB0YZpriZhEN0Ap7snZS?usp=drive_link" },
  { type:"بطاقة خصم طالب",          phone:"966542837020", card:"2502046314",       balance:0.31,    date:"15.06.2026", proof:"https://drive.google.com/drive/folders/1pgJg6aG7OyvnlQVNTSzMS0wOcs-mRSr1?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966591482436", card:"2303126959",       balance:0.90,    date:"24.06.2026", proof:"https://drive.google.com/drive/folders/1J-BKoRJZCVVFb0aLF3BfBV2_gKwAvd7Z?usp=drive_link" },
  { type:"بطاقة خصم طالب",          phone:"966501313476", card:"2502046303",       balance:0.04,    date:"16.06.2026", proof:"https://drive.google.com/drive/folders/1V0tXVQpoiuolaZa9ZXr4MEQz3Bk_ASGx?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966595761276", card:"9966001699119283", balance:0,       date:"24.06.2026", proof:"https://drive.google.com/drive/folders/1wd06pBYUtspJEZCVx9JCGs9W4n112ghN?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966540605017", card:"9966001699125214", balance:38.60,   date:"30.06.2026", proof:"https://drive.google.com/drive/folders/1RJN9DQjm8L_jeqPeOq5IBeNi9ZOYbzBT?usp=drive_link" },
  { type:"اشتراك أسبوعي",           phone:"966540471183", card:"9966001699185090", balance:0.50,    date:"06.07.2026", proof:"https://drive.google.com/drive/folders/1Z9UA8hjsiDxdsJkxioFBMa8t0-QpMDaW?usp=drive_link" },
  { type:"اشتراك أسبوعي",           phone:"966573812480", card:"9966001799092170", balance:3.20,    date:"06.07.2026", proof:"https://drive.google.com/drive/folders/1xQSEKe6rnk8aIyKsSjgHvp-_eToU6Ks2?usp=drive_link" },
  { type:"بطاقة خصم احتياجات خاصة", phone:"966508875836", card:"2502036870",       balance:41.82,   date:"04.07.2026",proof:"https://drive.google.com/drive/folders/1HfOxWUL5DXwuyWldqtoIpm1x3R889OAZ?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966541794108", card:"9966001699018111", balance:9.05,    date:"14.07.2026", proof:"https://drive.google.com/drive/folders/1GJCwK_nb9gke-YmBi8HRWvETUM1Vinwb?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966537897114", card:"9966001699111816", balance:0,       date:"13.07.2026", proof:"https://drive.google.com/drive/folders/186F_hu5-bLds-9TERYsOw3a0ovXayRtl?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966591085677", card:"2303208051",       balance:0.05,    date:"22.07.2026", proof:"https://drive.google.com/drive/folders/1_xWbyvm1acKUWRc87dPygZtUSTB3n32R?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966573445643", card:"9966001699121566", balance:0,       date:"24.07.2026", proof:"https://drive.google.com/drive/folders/1C-in4p5vAnztV2gaC3QyyjqJzDlQ3tJD?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966510646185", card:"9966001699102995", balance:7.30,    date:"05.08.2026", proof:"https://drive.google.com/drive/folders/1Mod_bWHqFaZiJ9uOBR-eYUtZojA3HJYs?usp=drive_link" },
  { type:"بطاقة خصم طالب",          phone:"966576044057", card:"2502046778",       balance:1.08,    date:"30.07.2026", proof:"https://drive.google.com/drive/folders/1SgFU4PGeQ200RZAJuy_eulHNZaBZSJi9?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966566179090", card:"9966001699011127", balance:0,       date:"05.08.2026", proof:"https://drive.google.com/drive/folders/1I9QsLcr77SdVO462wyviKVRoruEXmo7v?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966582292093", card:"9966001699005504", balance:9.10,    date:"06.08.2026", proof:"https://drive.google.com/drive/folders/1ap2L_asDQ5oFA3ONxd2tppEnnDBBI84H?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966567343080", card:"9966001699182548", balance:0.00,    date:"06.08.2026", proof:"https://drive.google.com/drive/folders/1ap2L_asDQ5oFA3ONxd2tppEnnDBBI84H?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966572201140", card:"9966001699127002", balance:0.00,    date:"11.08.2026", proof:"https://drive.google.com/drive/folders/1buEu12K_gUblynM4rPeMCnMDSMjuRujK?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966532448921", card:"9966001699126848", balance:3.10,    date:"12.08.2026", proof:"https://drive.google.com/drive/folders/1XrB70fRDN1_p4pGMpq9Vr_TWPoYFRxiX?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966506871056", card:"9966001699127309", balance:0,       date:"12.08.2026", proof:"https://drive.google.com/drive/folders/1I8UZoTm9w6OC-xuUk2ytsjIYuXY8apai?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966593397694", card:"9966001699125995", balance:16.55,   date:"18.08.2026", proof:"https://drive.google.com/drive/folders/1R9j8HXOOMh9KaTsLBzLX1lUJ7bG8y-9x?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966546419426", card:"9966001699127569", balance:4.40,    date:"18.08.2026", proof:"https://drive.google.com/drive/folders/1LXK4YS8nAVQWiPpa-CyXOVDJwoZl8lpw?usp=drive_link" },
  { type:"بطاقة خصم طالب",          phone:"966579261718", card:"2502046794",       balance:31.40,   date:"24.08.2026", proof:"https://drive.google.com/drive/folders/1EZwrtpQhk7z7mH8vjJO_sixNnUz-43fH?usp=drive_link" },
  { type:"اشتراك أسبوعي",           phone:"966574383940", card:"9966001699123858", balance:2.90,    date:"27.08.2026", proof:"https://drive.google.com/drive/folders/1K4s4cUBZODoDsy1Rq_DbPpgyu2v3I0Sk?usp=drive_link" },
  { type:"بطاقة خصم طالب",          phone:"966554083219", card:"2502046319",       balance:24.50,   date:"29.08.2026", proof:"https://drive.google.com/drive/folders/1qeSe1MbKSS8b4EBLsH5F5TITbAaNPhth?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966547331595", card:"9966001699118996", balance:0,       date:"01.09.2026", proof:"https://drive.google.com/drive/folders/1657B6dtzLpMmmtwq77upvuPWa2ZgUscZ?usp=drive_link" },
  { type:"بطاقة خصم طالب",          phone:"966509079383", card:"2502046224",       balance:15.77,   date:"06.09.2026", proof:"https://drive.google.com/drive/folders/18HCGi_dALeRly0g8lV_-vm7L1fEqVr19?usp=drive_link" },
  { type:"بطاقة خصم طالب",          phone:"966535819868", card:"2502046611",       balance:7.51,    date:"04.09.2026", proof:"https://drive.google.com/drive/folders/1e8HPmPXE8h4cc-dlkRfF6GhtiXNBudRC?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966507149790", card:"9966001699103016", balance:28.20,   date:"08.09.2026", proof:"https://drive.google.com/drive/folders/1I4mU3pJYqHRv7eXAJcLSwckDUNodbiKC?usp=drive_link" },
  { type:"بطاقة خصم طالب",          phone:"966539452606", card:"2502046298",       balance:13.23,   date:"15.09.2026", proof:"https://drive.google.com/drive/folders/1su1oXq5-iHgI4Yz4Ho3z8z--wHDwrPPI?usp=drive_link" },
  { type:"بطاقة خصم طالب",          phone:"966530278418", card:"2502046647",       balance:24.84,   date:"13.09.2026", proof:"https://drive.google.com/drive/folders/1aU7VnrbCsTlmMp78PQ359Wc44VQGRF4I?usp=drive_link" },
  { type:"بطاقة خصم طالب",          phone:"966580424841", card:"2502046222",       balance:4.44,    date:"22.09.2026", proof:"https://drive.google.com/drive/folders/1OX1Z3V_oBbIo5PItgwJQhxvRH6u9B4Ci?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966582520858", card:"9966001699129099", balance:1.05,    date:"22.09.2026", proof:"https://drive.google.com/drive/folders/1_CTzJ5Ms3_EpWT4AH-f9MdCkS-K-ZPmd?usp=drive_link" },
  { type:"بطاقة خصم طالب",          phone:"966552865794", card:"2502046629",       balance:1.40,    date:"17.09.2026", proof:"https://drive.google.com/drive/folders/1KmGA_qoeP6LAK6g4BzvYlHMxunNPpeKb?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966559357675", card:"9966001699112109", balance:4.35,    date:"22.09.2026", proof:"https://drive.google.com/drive/folders/1LlTydPRlv8fDY0H5ACELpS6FrYZFBWX7?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966547476992", card:"9966001699128762", balance:2.95,    date:"30.09.2026", proof:"https://drive.google.com/drive/folders/19tqvItTHwmx4TCNMvbwTbenjbJ8Ur8YH?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966583916819", card:"9966001699128277", balance:1.70,    date:"29.09.2026", proof:"https://drive.google.com/drive/folders/1KnWW2Iskzwf7kaA4a8-V3u7FqfPgOAN0?usp=drive_link" },
  { type:"بطاقة خصم طالب",          phone:"966503782721", card:"2502046201",       balance:10.96,   date:"28.09.2026", proof:"https://drive.google.com/drive/folders/1jsocHSNEExHuFdeSyaJHC7K7TV-sKJwf?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966579334991", card:"9966001699123630", balance:0.95,    date:"29.09.2026", proof:"https://drive.google.com/drive/folders/18F-ghaBQUCdzbHIuTS0zDM1deWK9jABd?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966535658094", card:"9966001699119446", balance:7.10,    date:"30.09.2026", proof:"https://drive.google.com/drive/folders/1p2faq154pTQQulTo_ixVy86WTFWZc1VR?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966552482900", card:"9966001699110027", balance:0.00,    date:"29.09.2026", proof:"https://drive.google.com/drive/folders/1LnAzNynbVOlJgyWVx5QUWk6ay2nG4iOc?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966537592758", card:"2303197054",       balance:9.85,    date:"03.10.2026", proof:"https://drive.google.com/drive/folders/1_NwXTTWQDcgUCgQ1D-geu6-UgzGRYhk3?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966570232090", card:"9966001699128020", balance:12.55,   date:"03.10.2026", proof:"https://drive.google.com/drive/folders/1gZfVxz8ns8tGY--OGRMW-gypMh4Xv8Rk?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966538951995", card:"9966001699040344", balance:1.55,    date:"03.10.2026", proof:"https://drive.google.com/drive/folders/1o4Edbsyj9-c2pUbOE2O1XfsZqStBD7zk?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966545028458", card:"2303208016",       balance:0.30,    date:"04.10.2026", proof:"https://drive.google.com/drive/folders/1CcnMaH_pvKYHOJm41qR3eWP6So8VStUL?usp=drive_link" },
  { type:"بطاقة خصم طالب",          phone:"966564665031", card:"2502046624",       balance:6.24,    date:"04.10.2026", proof:"https://drive.google.com/drive/folders/1KDwz-sDaRLwgZ9ddaZOHXgU1ZGfFq7Ja?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966561500256", card:"9966001699123050", balance:5.15,    date:"06.10.2026", proof:"https://drive.google.com/drive/folders/1iOQSwFZrMDWd85vV3vcMteEhSo6wu2Em?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966561914016", card:"2303197700",       balance:5,       date:"05.10.2026", proof:"https://drive.google.com/drive/folders/1uLGAp2xMTDvUgGNxsPIRQNCTr43bTq4s?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966545647200", card:"2303127605",       balance:10.60,   date:"06.10.2026", proof:"https://drive.google.com/drive/folders/1r1eFP3B4Qs4whb8nYBglWhqdaKTNOsBV?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966576625790", card:"2303197687",       balance:0.05,    date:"06.10.2026", proof:"https://drive.google.com/drive/folders/1tKOuZDhJKIui2gt87A4avyoSzg4Ov6C0?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966562250635", card:"9966001699071530", balance:0,       date:"08.10.2026", proof:"https://drive.google.com/drive/folders/1UXx5R9F4pSgctCyPjr4K2bBBVAXofy_d?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966580137706", card:"9966001699091081", balance:0,       date:"09.10.2026", proof:"https://drive.google.com/drive/folders/1gtBJgQ6hH6pQ0ELwo3ZlhMaPtuafrxy4?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966536813922", card:"9966001699128535", balance:0,       date:"11.10.2026", proof:"https://drive.google.com/drive/folders/1ro9xppVZiboh_WEPsfdIjRo4ZMjAYrlT?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966535559637", card:"9966001699074025", balance:0.30,    date:"06.10.2026", proof:"https://drive.google.com/drive/folders/1sIhxmVhkwT6O5vxa8EedapqU5VD0KN4k?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966575087687", card:"9966001699121763", balance:0.60,    date:"11.10.2026", proof:"https://drive.google.com/drive/folders/1U9txVoq1_9KZNgoS8v3VAkz6F5UzIXNE?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966501707329", card:"2303244544",       balance:124.65,  date:"11.10.2026", proof:"https://drive.google.com/drive/folders/1NxzfmNbx5ybHUFeEa86JErUy4ETjtoRX?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966565364127", card:"9966001699057192", balance:0.00,    date:"11.10.2026", proof:"https://drive.google.com/drive/folders/1qqApJkxlTucxEkiolAniI4Sgm8M7Yy4u?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966594060559", card:"9966001699126997", balance:2.75,    date:"11.10.2026", proof:"https://drive.google.com/drive/folders/1D1PsShwHBTW1UjA4K0kzOApXw_msz9qu?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966561394962", card:"2303197555",       balance:0.20,    date:"09.10.2026", proof:"https://drive.google.com/drive/folders/1OCWxL0sG2JTDfziggy75yGsjTkbveUsj?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966533826814", card:"2303126360",       balance:0.05,    date:"12.10.2026", proof:"https://drive.google.com/drive/folders/1ERf34P6oMXG_YjgD9SwobrIf-wKgnZ9A?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966531267539", card:"9966001699104262", balance:7.60,    date:"13.10.2026", proof:"https://drive.google.com/drive/folders/1xIOARs9LlBkzxdGz_PPCErpn9kuGnU8h?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966570769237", card:"9966001699117890", balance:0.00,    date:"12.10.2026", proof:"https://drive.google.com/drive/folders/16Qb-o8KXV4S3SxGQilNkvdq9DY4Pzeau?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966559178190", card:"2303209976",       balance:0.55,    date:"19.10.2026", proof:"https://drive.google.com/drive/folders/15EDtthSnxrDwwiuw6zZJISiszWR3l3dq?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966545350232", card:"9966001699124480", balance:4.00,    date:"14.10.2026", proof:"https://drive.google.com/drive/folders/1IvsvhT8R-co39IRBsdkRd1X-8VX6PMXR?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966537918847", card:"2303244202",       balance:0.30,    date:"20.10.2026", proof:"https://drive.google.com/drive/folders/11FpF9_d3rNsQChhd6LoB8FRm4iHs9JBF?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966556798639", card:"2303244545",       balance:60.60,   date:"20.10.2026", proof:"https://drive.google.com/drive/folders/1mZ0yqbi_wpiHG1CwOVJfPH0ym0lRv3_W?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966560522613", card:"2303245752",       balance:0.05,    date:"19.10.2026", proof:"https://drive.google.com/drive/folders/1ifpI8QxoV_OkYPosSRywqZHMiOATzFXm?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966568982506", card:"2303245753",       balance:1.70,    date:"19.10.2026", proof:"https://drive.google.com/drive/folders/16DLUbLKG8CCJij610sTdRjsp03z6TeNo?usp=drive_link" },
  { type:"بطاقة خصم طالب",          phone:"966535418099", card:"2502046344",       balance:1.76,    date:"28.10.2026", proof:"https://drive.google.com/drive/folders/103qq__nPoSZiD3JCgpdN90EHpik6Gl2A?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966535327716", card:"2303197848",       balance:1.40,    date:"22.10.2026", proof:"https://drive.google.com/drive/folders/1Kvvw5-pDrfiyojYeHf3KMSvEV3PzsL0L?usp=drive_link" },
  { type:"بطاقة خصم طالب",          phone:"966556682437", card:"2502046780",       balance:25.55,   date:"28.10.2026", proof:"https://drive.google.com/drive/folders/1mwCQmYMPyZhX-4SRDzTbgbexIkYaV9Df?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966553960257", card:"9966001699129236", balance:0.75,    date:"27.10.2026", proof:"https://drive.google.com/drive/folders/1jEs9pLqiIaP8PoEpkog5f_ZqCpKMLZw5?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966576175976", card:"2303208256",       balance:11.45,   date:"27.10.2026", proof:"https://drive.google.com/drive/folders/194HeOWt4cYWXAI-rfpRCUbEbp64pvspz?usp=drive_link" },
  { type:"اشتراك يومي",             phone:"966537940875", card:"9966001699130709", balance:10.00,   date:"26.10.2026", proof:"https://drive.google.com/drive/folders/1RSmKf7erPlXwS3NF94X4c1NcTXLqnt5d?usp=drive_link" },
  { type:"بطاقة خصم طالب",          phone:"966506340730", card:"2502046799",       balance:6.00,    date:"23.10.2026", proof:"https://drive.google.com/drive/folders/11_ifRDenh8P5JEY1_d0akbtMNfAKy6Jq?usp=drive_link" },
  { type:"اشتراك شهري",             phone:"966580545891", card:"9966001699125907", balance:6.90,    date:"05.11.2026", proof:"https://drive.google.com/drive/folders/1jI8sO3B_ZuxlVdmUyuxlbev-rbFiFD0o?usp=drive_link" },
  { type:"بطاقة خصم طالب",          phone:"966539442175", card:"2502046641",       balance:14.14,   date:"02.11.2026", proof:"https://drive.google.com/drive/folders/17BNG4oJQ5QoSR7mizJ55S_gBpXmpqWuM?usp=drive_link" },
  { type:"اشتراك أسبوعي",           phone:"966571027540", card:"9966001699128372", balance:10.55,   date:"01.11.2026", proof:"https://drive.google.com/drive/folders/1aX5F-kItZxF6Ril2neEqRCh8YmEB_Ab3?usp=drive_link" },
];

/* ============================================================
   العملاء الذين سددوا وتم فك الحظر عنهم  (تبويب "تم فك الحظر")
   ============================================================

   البيانات المطلوبة ثلاثة فقط: نوع البطاقة + رقم الهاتف + رقم البطاقة.

   لنقل عميل سدّد:
     1) احذف سطره من القائمة CUSTOMERS أعلاه
     2) اكتب هنا سطرًا بنفس الشكل التالي (احذف علامة // لتفعيل المثال):

   { type:"اشتراك شهري", phone:"966549914480", card:"2303209461" },
   ============================================================ */

const RELEASED = [
  { type:"اشتراك شهري",    phone:"966559755522", card:"9966001399023336" },
  { type:"بطاقة خصم طالب", phone:"966535230987", card:"2502046522"       },
  { type:"بطاقة خصم طالب", phone:"966537437908", card:"2502046539"       },
  { type:"اشتراك يومي",    phone:"966503808684", card:"9966001699017113" },
  { type:"بطاقة خصم طالب", phone:"966570505129", card:"2502036853"       },
  { type:"بطاقة خصم طالب", phone:"966568614613", card:"2502046793"       },
  { type:"اشتراك يومي",    phone:"966548603454", card:"9966001699123401" },
  { type:"اشتراك شهري",    phone:"966552200084", card:"9966001699116714" },
  { type:"بطاقة خصم طالب", phone:"966533607134", card:"2502046343"       }

];








const TYPE_COLORS = {
  "اشتراك شهري": "t-m",
  "اشتراك أسبوعي": "t-w",
  "اشتراك يومي": "t-d",
  "بطاقة خصم طالب": "t-s",
  "بطاقة خصم كبار السن": "t-e",
  "بطاقة خصم احتياجات خاصة": "t-x"
};
const esc = s => String(s).replace(/[&<>"]/g, c => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
} [c]));
const cls = t => TYPE_COLORS[t] || "t-o";
const label = t => esc(t.replace(/^بطاقة /, ""));

const ar2en = v => String(v == null ? "" : v).replace(/[٠-٩]/g, d => "٠١٢٣٤٥٦٧٨٩".indexOf(d)).trim();
const digits = v => ar2en(v).replace(/\D/g, "");
const toISO = v => {
  const m = ar2en(v).match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{4})$/);
  return m ? `${m[3]}-${m[2].padStart(2,"0")}-${m[1].padStart(2,"0")}` : "0000-00-00"
};
const toPhone = v => {
  const p = digits(v);
  return /^05\d{8}$/.test(p) ? "966" + p.slice(1) : p
};
const toLink = v => {
  const l = String(v || "").trim();
  return /^https?:\/\//i.test(l) ? l.replace(/"/g, "%22") : ""
};

const DATA = (typeof CUSTOMERS !== "undefined" ? CUSTOMERS : []).map((c, i) => ({
  i: i + 1,
  t: String(c.type || "").trim(),
  c: digits(c.card),
  p: toPhone(c.phone),
  b: parseFloat(ar2en(c.balance)) || 0,
  d: toISO(c.date),
  link: toLink(c.proof)
}));



const REL = (typeof RELEASED !== "undefined" ? RELEASED : []).map((c, i) => ({
  i: i + 1,
  t: String(c.type || "").trim(),
  c: digits(c.card),
  p: toPhone(c.phone),
  b: 0,
  d: "0000-00-00",
  link: ""
}));
REL.forEach(r => {
  if (!/^\d{10,16}$/.test(r.c) || !/^\d{12}$/.test(r.p) || !r.t) console.warn("تحقق من بيانات عميل فك الحظر رقم", r.i, RELEASED[r.i - 1]);
});
DATA.forEach(r => {
  if (!/^\d{10,16}$/.test(r.c) || !/^\d{12}$/.test(r.p) || r.d === "0000-00-00" || !r.t) console.warn("تحقق من بيانات السطر", r.i, CUSTOMERS[r.i - 1]);
});

const $ = id => document.getElementById(id);
let type = "all",
  sortKey = "i",
  sortDir = 1;
const qf = {
  bal: false,
  proof: ""
};
let selId = 0,
  viewIds = [],
  first = true;
const maxOf = a => Math.max(1, ...a.map(r => r.b));
let view = "blocked";
const cur = () => view === "released" ? REL : DATA;
const PRESET = {
  list: ["i", 1],
  new: ["d", -1],
  old: ["d", 1],
  bal: ["b", -1]
};
const COLS = [
  ["i", "م", ""],
  ["t", "نوع البطاقة", "tag"],
  ["p", "رقم الهاتف", "phone"],
  ["c", "رقم البطاقة", "card"],
  ["b", "الرصيد", "wallet"],
  ["d", "آخر استعمال", "cal"],
  ["link", "الدليل", "link"]
];
const cols = () => view === "released" ? COLS.slice(0, 4) : COLS;
const fmtD = d => d === "0000-00-00" ? "—" : d.split("-").reverse().join(".");
const ago = iso => {
  const d = Math.floor((Date.now() - new Date(iso + "T00:00:00")) / 864e5);
  if (isNaN(d) || d < 0) return "";
  if (d === 0) return "اليوم";
  if (d === 1) return "أمس";
  if (d === 2) return "منذ يومين";
  if (d <= 10) return `منذ ${d} أيام`;
  if (d < 30) return `منذ ${d} يومًا`;
  const m = Math.floor(d / 30);
  if (d < 60) return "منذ شهر";
  if (m === 2) return "منذ شهرين";
  if (m <= 10) return `منذ ${m} أشهر`;
  if (d < 365) return `منذ ${m} شهرًا`;
  const y = Math.floor(d / 365);
  return y === 1 ? "منذ سنة" : y === 2 ? "منذ سنتين" : `منذ ${y} سنوات`
};
const copyText = async t => {
  try {
    await navigator.clipboard.writeText(t)
  } catch (_) {
    const a = document.createElement("textarea");
    a.value = t;
    a.style.cssText = "position:fixed;opacity:0";
    document.body.appendChild(a);
    a.select();
    try {
      document.execCommand("copy")
    } catch (__) {}
    a.remove()
  }
};
let toastT;
const toast = m => {
  const t = $("toast");
  t.textContent = m;
  t.classList.add("show");
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove("show"), 1700)
};
const setNum = (el, n) => {
  if (!first || matchMedia("(prefers-reduced-motion:reduce)").matches) {
    el.textContent = n;
    return
  }
  const t0 = performance.now();
  const step = t => {
    const k = Math.min(1, (t - t0) / 700);
    el.textContent = Math.round(n * (1 - Math.pow(1 - k, 3)));
    if (k < 1) requestAnimationFrame(step)
  };
  requestAnimationFrame(step)
};
const ic = (n, c = "") => `<svg class="i ${c}"><use href="#i-${n}"/></svg>`;
const sv = p => `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
const ICON = {
  idle: sv('<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16.5v.5"/>'),
  bad: sv('<path d="M6 6l12 12M18 6 6 18"/>'),
  ok: sv('<path d="m5 12.5 4.5 4.5L19 7.5"/>')
};

const proofBtn = (r, x = "") => r.link ?
  `<a class="proof ${x}" href="${r.link}" target="_blank" rel="noopener">${ic("folder","dsk")}<span class="dsk">فتح</span><span class="mob">فتح الدليل</span>${ic("link","mob")}</a>` :
  `<span class="proof off ${x}"><span class="dsk">لا يوجد</span><span class="mob">لا يوجد دليل</span></span>`;

function alert_(s, t, sub) {
  const a = $("al");
  a.hidden = false;
  a.dataset.s = s;
  $("ic").innerHTML = ICON[s];
  $("st-t").textContent = t;
  $("st-s").textContent = sub || ""
}

function side() {
  const n = {};
  cur().forEach(r => n[r.t] = (n[r.t] || 0) + 1);
  const types = [...Object.keys(TYPE_COLORS).filter(k => n[k]), ...Object.keys(n).filter(k => !(k in TYPE_COLORS))];
  const subs = DATA.filter(r => r.t.startsWith("اشتراك")).length;
  setNum($("total"), DATA.length);
  setNum($("s1"), subs);
  setNum($("s2"), DATA.length - subs);
  $("last").textContent = DATA.length ? fmtD(DATA.reduce((a, r) => r.d > a ? r.d : a, "")) : "—";
  $("tabs").innerHTML = [
      ["all", "الكل", cur().length], ...types.map(k => [k, label(k), n[k]])
    ]
    .map(([k, l, c]) => `<button class="tab" type="button" data-k="${esc(k)}" aria-pressed="${k===type}">${l}<b>${c}</b></button>`).join("");
  viewsRender()
}

function viewsRender() {
  $("views").innerHTML = `<button class="vw" type="button" role="tab" data-v="blocked" aria-selected="${view==="blocked"}">${ic("ban")}المحظورون<b>${DATA.length}</b></button><button class="vw" type="button" role="tab" data-v="released" aria-selected="${view==="released"}">${ic("unlock")}تم فك الحظر<b>${REL.length}</b></button>`
}

function qfRender() {
  if (view === "released") {
    $("qf").innerHTML = type !== "all" ? `<button class="qc reset" type="button" data-q="reset">إعادة ضبط</button>` : "";
    return
  }
  const cb = cur().filter(r => r.b > 0).length;
  const chips = [
    ["bal", "رصيد متبقي", "wallet", cb, qf.bal]
  ];

  const active = qf.bal || type !== "all";

  $("qf").innerHTML =
    chips.map(([k, l, g, c, on]) =>
      `<button class="qc" type="button" data-q="${k}" aria-pressed="${on}">
        ${ic(g)}${l}<b>${c}</b>
      </button>`
    ).join("") +
    (active
      ? `<button class="qc reset" type="button" data-q="reset">إعادة ضبط</button>`
      : "");
}





function query() {
  const term = digits($("q").value);
  const loc = term[0] === "0" && term.length > 3 ? term.slice(1) : null;
  const out = cur().filter(r => (type === "all" || r.t === type) && (!term || r.c.includes(term) || r.p.includes(term) || (loc && r.p.includes(loc))) && (!qf.bal || r.b > 0) && (qf.proof !== "yes" || r.link) && (qf.proof !== "no" || !r.link));
  out.sort((a, b) => {
    const x = sortKey === "link" ? +!!a.link : a[sortKey],
      y = sortKey === "link" ? +!!b.link : b[sortKey];
    const c = typeof x === "number" ? x - y : String(x).localeCompare(String(y), "ar", {
      numeric: true
    });
    return (c * sortDir) || a.i - b.i
  });
  return {
    out,
    term,
    loc
  };
}

function render() {
  const {
    out,
    term,
    loc
  } = query();
  $("x").hidden = !$("q").value;
  const cardRows = term ? DATA.filter(r => r.c === term) : [];
  const byCard = cardRows[cardRows.length - 1];
  const byPhone = term && term.length >= 9 ? DATA.filter(r => r.p === term || (loc && r.p.endsWith(loc))) : [];
  const phoneCards = [...new Set(byPhone.map(r => r.c))];
  const lastP = byPhone[byPhone.length - 1];
  const relP = term && term.length >= 9 ? REL.filter(r => r.p === term || (loc && r.p.endsWith(loc))) : [];
  const relC = term ? REL.filter(r => r.c === term) : [];
  const relR = relP[relP.length - 1] || relC[relC.length - 1];
  if (!term) $("al").hidden = true;
  else if (byPhone.length) alert_("bad", "العميل محظور", phoneCards.length > 1 ? `${phoneCards.length} بطاقات محظورة مرتبطة بهذا الرقم` : `${label(lastP.t)} · بطاقة ${phoneCards[0]} · آخر استعمال ${fmtD(lastP.d)}${byPhone.length > 1 ? ` · ظهرت ${byPhone.length} مرات` : ""}`);
  else if (byCard) alert_("bad", "البطاقة محظورة", `${label(byCard.t)} · رقم الهاتف ${byCard.p} · آخر استعمال ${fmtD(byCard.d)}${cardRows.length > 1 ? ` · ظهرت ${cardRows.length} مرات` : ""}`);
  else if (relR) alert_("ok", "تم فك الحظر عن العميل", `${label(relR.t)} · بطاقة ${relR.c} · موجود في تبويب «تم فك الحظر»`);
  else if (term.length >= 9 && !out.length) alert_("ok", "غير موجودة في القائمة", "لا توجد بطاقة أو رقم هاتف بهذا الرقم ضمن القوائم");
  else alert_("idle", out.length ? `${out.length} نتيجة مطابقة` : "لا توجد نتيجة", out.length ? "أكمل الرقم لتأكيد الحالة" : "تأكد من الرقم وأعد المحاولة");

  const rows = out;
  viewIds = out.map(r => r.i);
  qfRender();
  const hl = raw => {
    const k = term ? raw.indexOf(term) : -1;
    return k < 0 ? raw : raw.slice(0, k) + "<mark>" + raw.slice(k, k + term.length) + "</mark>" + raw.slice(k + term.length)
  };

  const maxB = maxOf(cur());
  const full = view !== "released";
  const head = `<div class="r h">${cols().map(([k,l,g])=>`<button class="th ${k===sortKey?"on":""}" data-s="${k}" type="button" title="ترتيب حسب ${l}">${l}${g?ic(g):""}<s>${k===sortKey?(sortDir>0?"▲":"▼"):"⇅"}</s></button>`).join("")}<span></span></div>`;
  const body = rows.map(r => `
    <div class="r d${r.i===selId?" sel":""}${view==="released"?" rls":""}" data-i="${r.i}" tabindex="0" aria-haspopup="dialog">
      <span class="idx">${r.i}</span>
      <span class="tyc"><span class="ty ${cls(r.t)}">${label(r.t)}</span></span>
      <span class="f fp"><em class="lb">${ic("phone")}رقم الهاتف</em><span class="pv"><span class="n">${hl(r.p)}</span><button class="cpy" type="button" data-copy="${r.p}" title="نسخ الرقم" aria-label="نسخ رقم الهاتف">${ic("copy")}</button></span></span>
      <span class="f fc"><em class="lb">${ic("card")}رقم البطاقة</em><span class="n">${hl(r.c)}</span></span>
      ${full?`      <span class="f fb"><em class="lb">${ic("wallet")}الرصيد</em><span class="am"><b class="${r.b?"":"z"}">${r.b.toFixed(2)}</b> <small>ر.س</small></span><i class="mbar" style="--w:${r.b?Math.max(6,Math.round(Math.sqrt(r.b/maxB)*100)):0}%"></i></span>`:""}
      ${full?`      <span class="f fd"><em class="lb">${ic("cal")}آخر استعمال</em><span class="dtw"><span class="n dt">${fmtD(r.d)}</span><small class="rel">${ago(r.d)}</small></span></span>`:""}
      ${full?`<span class="f pf"><em class="lb">${ic("folder")}الدليل</em>${proofBtn(r)}</span>`:""}
      <span class="go" aria-hidden="true">${ic("chev")}</span>
    </div>`).join("");
  $("table").classList.toggle("rv", view === "released");
  const emptyHtml = view === "released" && !REL.length ?
    `<div class="empty">${ic("unlock","big")}<div>لا يوجد عملاء تم فك الحظر عنهم حتى الآن</div><small></small></div>` :
    `<div class="empty">${ic("searchx","big")}<div>لا توجد بطاقات مطابقة</div></div>`;
  $("table").innerHTML = out.length ? head + body : emptyHtml;
  $("info").textContent = out.length === cur().length ? `${out.length} بطاقة` : `${out.length} من ${cur().length} بطاقة`;
}

function openCard(i) {
  const r = cur()[i - 1],
    pos = viewIds.indexOf(i),
    n = viewIds.length;
  const full = view !== "released";
  selId = i;
  document.querySelectorAll(".r.d.sel").forEach(e => e.classList.remove("sel"));
  const rw = document.querySelector(`.r.d[data-i="${i}"]`);
  if (rw) {
    rw.classList.add("sel");
    rw.scrollIntoView({
      block: "nearest"
    })
  }
  $("dr").innerHTML = `
    <div class="dh"><div class="dtags"><span class="ty ${cls(r.t)}">${label(r.t)}</span>${view==="released"?`<span class="okb">${ic("check")}تم فك الحظر</span>`:""}</div><button class="dx" type="button" id="dx" aria-label="إغلاق">×</button></div>
    <div class="db">
      <small>${ic("phone")}رقم الهاتف</small><span class="big">${r.p}</span>
      <div class="dl">
        <div><span>${ic("card")}رقم البطاقة</span><b class="n">${r.c}</b></div>
        ${full?`<div><span>${ic("wallet")}الرصيد</span><b class="am"><b class="${r.b?"":"z"}">${r.b.toFixed(2)}</b> <small>ر.س</small></b></div>
        <div><span>${ic("cal")}آخر استعمال</span><b class="n dt">${fmtD(r.d)}</b><small class="rel" style="display:block;font-size:11px;color:#97a3ad">${ago(r.d)}</small></div>`:""}
        <div><span>${ic("hash")}الرقم في القائمة</span><b>${r.i}</b></div>
      </div>
      ${full?proofBtn(r,"lg"):""}
      <div class="dnav">
        <button class="dn" type="button" data-nav="-1" ${pos<=0?"disabled":""}>${ic("chev","flip")}السابق</button>
        <span class="dc">${pos+1} / ${n}</span>
        <button class="dn" type="button" data-nav="1" ${pos<0||pos>=n-1?"disabled":""}>التالي${ic("chev")}</button>
      </div>
    </div>`;
  document.body.classList.add("open");
  $("dr").setAttribute("aria-hidden", "false");
  const f = $("dr").querySelector("[data-nav]:not(:disabled)") || $("dx");
  f.focus({
    preventScroll: true
  })
}
const navCard = d => {
  const t = viewIds[viewIds.indexOf(selId) + d];
  if (t) openCard(t)
};
const closeCard = () => {
  document.body.classList.remove("open");
  $("dr").setAttribute("aria-hidden", "true")
};

const go = () => render();
const syncSel = () => {
  const m = Object.entries(PRESET).find(([, v]) => v[0] === sortKey && v[1] === sortDir);
  $("sort").value = m ? m[0] : "custom"
};
$("tabs").addEventListener("click", e => {
  const b = e.target.closest(".tab");
  if (!b) return;
  type = b.dataset.k;
  side();
  go()
});
$("table").addEventListener("click", e => {
  const cp = e.target.closest(".cpy");
  if (cp) {
    copyText(cp.dataset.copy);
    toast("تم نسخ الرقم " + cp.dataset.copy);
    return
  }
  const h = e.target.closest(".th");
  if (h) {
    const k = h.dataset.s;
    if (k === sortKey) sortDir = -sortDir;
    else {
      sortKey = k;
      sortDir = (k === "d" || k === "b") ? -1 : 1
    }
    syncSel();
    return go()
  }
  const row = e.target.closest(".r.d");
  if (row && !e.target.closest("a")) openCard(+row.dataset.i);
});
$("table").addEventListener("keydown", e => {
  const row = e.target.closest(".r.d");
  if (!row || e.target !== row) return;
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    openCard(+row.dataset.i)
  } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
    e.preventDefault();
    const n = e.key === "ArrowDown" ? row.nextElementSibling : row.previousElementSibling;
    if (n && n.classList.contains("d")) n.focus()
  }
});
$("qf").addEventListener("click", e => {
  const b = e.target.closest(".qc");
  if (!b) return;
  const k = b.dataset.q;
  if (k === "bal") qf.bal = !qf.bal;
  else if (k === "reset") {
    qf.bal = false;
    qf.proof = "";
    type = "all";
    side()
  } else qf.proof = qf.proof === k ? "" : k;
  go()
});
document.addEventListener("click", e => {
  if (e.target.closest("#dx") || e.target.id === "ov") closeCard();
  const nv = e.target.closest("[data-nav]");
  if (nv && !nv.disabled) navCard(+nv.dataset.nav)
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeCard();
  if (document.body.classList.contains("open") && !/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) {
    if (e.key === "ArrowRight") navCard(-1);
    if (e.key === "ArrowLeft") navCard(1)
  }
  if (e.key === "/" && !/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) {
    e.preventDefault();
    $("q").focus()
  }
});
$("sort").onchange = () => {
  const p = PRESET[$("sort").value];
  if (p)[sortKey, sortDir] = p;
  go()
};
$("q").addEventListener("input", go);
$("x").onclick = () => {
  $("q").value = "";
  go();
  $("q").focus()
};
$("f").addEventListener("submit", e => {
  e.preventDefault();
  go()
});
const onScroll = () => {
  $("table").classList.toggle("stuck", $("table").getBoundingClientRect().top < -2);
  $("top").classList.toggle("show", scrollY > 700)
};
addEventListener("scroll", onScroll, {
  passive: true
});
$("top").onclick = () => scrollTo({
  top: 0,
  behavior: "smooth"
});
$("views").addEventListener("click", e => {
  const b = e.target.closest(".vw");
  if (!b || b.dataset.v === view) return;
  view = b.dataset.v;
  type = "all";
  qf.bal = false;
  qf.proof = "";
  sortKey = "i";
  sortDir = 1;
  selId = 0;
  closeCard();
  syncSel();
  side();
  go()
});
side();
first = false;
render();
onScroll();
