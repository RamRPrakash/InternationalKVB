export default()=>{
  return {
        "APPLICATION" : [
            {"NTB" : {
                "PAGES":[{
                    "NEWCUSTOMERVIEW":[{
                        "FIELDS":[
                            {"GST" : [
                                {
                                    "KEYWORDS" : "GST,TAG,TAG NAME,STORED,STORED NAME,KEY",
                                    "ANSWER":"Tag for gst number is GST_NUMBER",
                                    "HEADING" : "GST TAG"
                                },
                                {
                                    "KEYWORDS" : "GST,EXAMPLE,SAMPLE,SAMPLE VALUE",
                                    "ANSWER":"Sample GST Number 29AAXFS0722N1ZF",
                                    "HEADING" : "SAMPLE GST NUMBER"
                                },
                                {
                                    "KEYWORDS" : "GST,FORMAT,CORRECT,SAMPLE",
                                    "ANSWER": "First 2 value - Number , Next 5 value - Character , Next 4 value - Number , Next 1 value - Character , Next 1 value - Number , Next 2 value - character",
                                    "HEADING" : "FORMAT OF GST NUMBER"
                                },
                                {
                                    "KEYWORDS": "GST,MANDATORY,MANDY",
                                    "ANSWER": "If the field is shown then only mandatory ,Otherwise non mandatory",
                                    "HEADING": "MANDATORY FOR GST NUMBER"
                                },
                                {
                                    "KEYWORDS": "GST,API,SERVICE,verify,verification",
                                    "ANSWER": "For Gst we are using Gst/TaxPayerNTB/1.0.1",
                                    "HEADING": "GST API SERVICE"
                                },
                                {
                                    "KEYWORDS": "GST,API,REQUEST,PARAMETER",
                                    "ANSWER": "{gstin:29AAXFS0722N1ZF}",
                                    "HEADING": "GST REQUEST STRUCTURE"
                                },
                                {
                                    "KEYWORDS": "GST,API,RESPONSE",
                                    "ANSWER": "view Response in link : https://jsonformatter.org/json-editor/ee549a",
                                    "HEADING": "GST RESPONSE STRUCTURE"
                                },
                                {
                                    "KEYWORDS": "GST,LENGTH,TOTAL",
                                    "ANSWER": "GST MAXIMUM LETTER IS 15",
                                    "HEADING": "LENGTH OF GST"
                                },
                                {
                                    "KEYWORDS": "GST,FIELD,FIELD TYPE,TYPE",
                                    "ANSWER": "TEXT FIELD, It allows both number and numeric value",
                                    "HEADING": "GST FIELD TYPE"
                                },
                                {
                                    "KEYWORDS": "GST,EDITABLE,NOT EDITABLE",
                                    "ANSWER": "Once Gst verified field to be non editable",
                                    "HEADING": "GST EDITABLE/NON EDITABLE"
                                },
                                {
                                    "KEYWORDS": "GST,SHOWN,DISPLAY",
                                    "ANSWER": `If "GST is not applicable to me" is unchecked`,
                                    "HEADING": "DISPLAY GST"
                                },

                            ]},
                            {}
                        ]
                    }]
                }]
            }}
        ]
    }
}