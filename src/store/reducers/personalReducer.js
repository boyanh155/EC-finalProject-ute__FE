//form name - typeColor(Length)
//ex : uB : undercut brown
//ex : hcl : hair curling long
// undercut
import uB from "../../assets/hairstyle/undercutBrown.png";
// hair curling
import hCL from "../../assets/hairstyle/daiuon.jpg";
//moHiCan
import mL from "../../assets/hairstyle/mohicadai.jpg";
//tattoo
import tM from "../../assets/hairstyle/tattoo1.jpg";
//slick back
import sG from "../../assets/hairstyle/slickbackbac.jpg";
//dread lock
import dS from "../../assets/hairstyle/dS.jfif";
import dT from "../../assets/hairstyle/dT.jfif";
import dY from "../../assets/hairstyle/dY.jfif";

const initialState = {
    // list all style
    listStyle: [
        // undercut
        { type: "u", pic: uB, _name: "Undercut", content: "main", selected: false },
        { type: "u", pic: uB, _name: "Undercut", content: "detail" },
        { type: "u", pic: uB, _name: "Undercut", content: "detail" },
        { type: "u", pic: uB, _name: "Undercut", content: "detail" },
        //curling
        {
            type: "hC",
            pic: hCL,
            _name: "Hair curling",
            content: "main",
            selected: false,
        },
        { type: "hC", pic: hCL, _name: "Hair curling", content: "detail" },
        { type: "hC", pic: hCL, _name: "Hair curling", content: "detail" },
        { type: "hC", pic: hCL, _name: "Hair curling", content: "detail" },
        { type: "hC", pic: hCL, _name: "Hair curling", content: "detail" },
        //mo hi can
        { type: "m", pic: mL, _name: "Mohican", content: "main", selected: false },
        { type: "m", pic: mL, _name: "Mohican", content: "detail" },
        { type: "m", pic: mL, _name: "Mohican", content: "detail" },
        { type: "m", pic: mL, _name: "Mohican", content: "detail" },
        { type: "m", pic: mL, _name: "Mohican", content: "detail" },
        //tattoo hair
        { type: "t", pic: tM, _name: "Tattoo", content: "main", selected: false },
        { type: "t", pic: tM, _name: "Tattoo", content: "detail" },
        { type: "t", pic: tM, _name: "Tattoo", content: "detail" },
        { type: "t", pic: tM, _name: "Tattoo", content: "detail" },
        { type: "t", pic: tM, _name: "Tattoo", content: "detail" },
        { type: "t", pic: tM, _name: "Tattoo", content: "detail" },
        // slick back
        {
            type: "s",
            pic: sG,
            _name: "Slick back",
            content: "main",
            selected: false,
        },
        { type: "s", pic: sG, _name: "Slick back", content: "detail" },
        { type: "s", pic: sG, _name: "Slick back", content: "detail" },
        { type: "s", pic: sG, _name: "Slick back", content: "detail" },
        { type: "s", pic: sG, _name: "Slick back", content: "detail" },
        // dread lock
        {
            type: "d",
            pic: dY,
            _name: "Dread lock",
            content: "main",
            selected: false,
        },
        { type: "d", pic: dY, _name: "Dread lock", content: "detail" },
        { type: "d", pic: dY, _name: "Dread lock", content: "detail" },
        { type: "d", pic: dY, _name: "Dread lock", content: "detail" },
        { type: "d", pic: dY, _name: "Dread lock", content: "detail" },
    ],
};
//change type
const personalReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_STYLE":
            {
                return {
                    ...state,
                    listStyle: state.listStyle.map((v) => {
                        if (v.content === "main") {
                            if (v.type === action.payload.type) {
                                v.selected = true;
                            } else {
                                v.selected = false;
                            }
                        }
                        return v;
                    }),
                };
            }

        default:
            return state;
    }
};

export default personalReducer;