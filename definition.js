Blockly.Blocks['tft_lcd_create'] = {
    init: function () {
      this.jsonInit(
        {
            "type": "tft_lcd_create",
            "message0": "khởi tạo màn hình TFT chân MISO %1 chân MOSI %2 chân SCK %3 chân CS %4 chân DC %5 chân RST %6 độ rộng %7 %8 chiều cao %9 %10",
            "args0": [
              {
                "type": "field_dropdown",
                "name": "miso_pin",
                "options": [
                  [
                    "P15",
                    "pin15"
                  ],
                  [
                    "P1",
                    "pin1"
                  ],
                  [
                    "P2",
                    "pin2"
                  ],
                  [
                    "P3",
                    "pin3"
                  ],
                  [
                    "P4",
                    "pin4"
                  ],
                  [
                    "P5",
                    "pin5"
                  ],
                  [
                    "P6",
                    "pin6"
                  ],
                  [
                    "P7",
                    "pin7"
                  ],
                  [
                    "P8",
                    "pin8"
                  ],
                  [
                    "P9",
                    "pin9"
                  ],
                  [
                    "P10",
                    "pin10"
                  ],
                  [
                    "P11",
                    "pin11"
                  ],
                  [
                    "P12",
                    "pin12"
                  ],
                  [
                    "P13",
                    "pin13"
                  ],
                  [
                    "P14",
                    "pin14"
                  ],
                  [
                    "P0",
                    "pin0"
                  ],
                  [
                    "P16",
                    "pin16"
                  ]
                ]
              },
              {
                "type": "field_dropdown",
                "name": "mosi_pin",
                "options": [
                  [
                    "P16",
                    "pin16"
                  ],
                  [
                    "P1",
                    "pin1"
                  ],
                  [
                    "P2",
                    "pin2"
                  ],
                  [
                    "P3",
                    "pin3"
                  ],
                  [
                    "P4",
                    "pin4"
                  ],
                  [
                    "P5",
                    "pin5"
                  ],
                  [
                    "P6",
                    "pin6"
                  ],
                  [
                    "P7",
                    "pin7"
                  ],
                  [
                    "P8",
                    "pin8"
                  ],
                  [
                    "P9",
                    "pin9"
                  ],
                  [
                    "P10",
                    "pin10"
                  ],
                  [
                    "P11",
                    "pin11"
                  ],
                  [
                    "P12",
                    "pin12"
                  ],
                  [
                    "P13",
                    "pin13"
                  ],
                  [
                    "P14",
                    "pin14"
                  ],
                  [
                    "P15",
                    "pin15"
                  ],
                  [
                    "P0",
                    "pin0"
                  ]
                ]
              },
              {
                "type": "field_dropdown",
                "name": "sck_pin",
                "options": [
                  [
                    "P13",
                    "pin13"
                  ],
                  [
                    "P1",
                    "pin1"
                  ],
                  [
                    "P2",
                    "pin2"
                  ],
                  [
                    "P3",
                    "pin3"
                  ],
                  [
                    "P4",
                    "pin4"
                  ],
                  [
                    "P5",
                    "pin5"
                  ],
                  [
                    "P6",
                    "pin6"
                  ],
                  [
                    "P7",
                    "pin7"
                  ],
                  [
                    "P8",
                    "pin8"
                  ],
                  [
                    "P9",
                    "pin9"
                  ],
                  [
                    "P10",
                    "pin10"
                  ],
                  [
                    "P11",
                    "pin11"
                  ],
                  [
                    "P12",
                    "pin12"
                  ],
                  [
                    "P0",
                    "pin0"
                  ],
                  [
                    "P14",
                    "pin14"
                  ],
                  [
                    "P15",
                    "pin15"
                  ],
                  [
                    "P16",
                    "pin16"
                  ]
                ]
              },
              {
                "type": "field_dropdown",
                "name": "cs_pin",
                "options": [
                  [
                    "P14",
                    "pin14"
                  ],
                  [
                    "P1",
                    "pin1"
                  ],
                  [
                    "P2",
                    "pin2"
                  ],
                  [
                    "P3",
                    "pin3"
                  ],
                  [
                    "P4",
                    "pin4"
                  ],
                  [
                    "P5",
                    "pin5"
                  ],
                  [
                    "P6",
                    "pin6"
                  ],
                  [
                    "P7",
                    "pin7"
                  ],
                  [
                    "P8",
                    "pin8"
                  ],
                  [
                    "P9",
                    "pin9"
                  ],
                  [
                    "P10",
                    "pin10"
                  ],
                  [
                    "P11",
                    "pin11"
                  ],
                  [
                    "P12",
                    "pin12"
                  ],
                  [
                    "P13",
                    "pin13"
                  ],
                  [
                    "P0",
                    "pin0"
                  ],
                  [
                    "P15",
                    "pin15"
                  ],
                  [
                    "P16",
                    "pin16"
                  ]
                ]
              },
              {
                "type": "field_dropdown",
                "name": "dc_pin",
                "options": [
                  [
                    "P10",
                    "pin10"
                  ],
                  [
                    "P1",
                    "pin1"
                  ],
                  [
                    "P2",
                    "pin2"
                  ],
                  [
                    "P3",
                    "pin3"
                  ],
                  [
                    "P4",
                    "pin4"
                  ],
                  [
                    "P5",
                    "pin5"
                  ],
                  [
                    "P6",
                    "pin6"
                  ],
                  [
                    "P7",
                    "pin7"
                  ],
                  [
                    "P8",
                    "pin8"
                  ],
                  [
                    "P9",
                    "pin9"
                  ],
                  [
                    "P0",
                    "pin0"
                  ],
                  [
                    "P11",
                    "pin11"
                  ],
                  [
                    "P12",
                    "pin12"
                  ],
                  [
                    "P13",
                    "pin13"
                  ],
                  [
                    "P14",
                    "pin14"
                  ],
                  [
                    "P15",
                    "pin15"
                  ],
                  [
                    "P16",
                    "pin16"
                  ]
                ]
              },
              {
                "type": "field_dropdown",
                "name": "rst_pin",
                "options": [
                  [
                    "P12",
                    "pin12"
                  ],
                  [
                    "P1",
                    "pin1"
                  ],
                  [
                    "P2",
                    "pin2"
                  ],
                  [
                    "P3",
                    "pin3"
                  ],
                  [
                    "P4",
                    "pin4"
                  ],
                  [
                    "P5",
                    "pin5"
                  ],
                  [
                    "P6",
                    "pin6"
                  ],
                  [
                    "P7",
                    "pin7"
                  ],
                  [
                    "P8",
                    "pin8"
                  ],
                  [
                    "P9",
                    "pin9"
                  ],
                  [
                    "P10",
                    "pin10"
                  ],
                  [
                    "P11",
                    "pin11"
                  ],
                  [
                    "P0",
                    "pin0"
                  ],
                  [
                    "P13",
                    "pin13"
                  ],
                  [
                    "P14",
                    "pin14"
                  ],
                  [
                    "P15",
                    "pin15"
                  ],
                  [
                    "P16",
                    "pin16"
                  ]
                ]
              },
              {
                type: "input_dummy",
              },
              {
                "type": "field_number",
                "name": "width",
                "value": 240
              },
              {
                type: "input_dummy",
              },
              {
                "type": "field_number",
                "name": "high",
                "value": 320
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
          }
      );
        }
    };

    Blockly.Python['tft_lcd_create'] = function(block) {
        var dropdown_miso_pin = block.getFieldValue('miso_pin');
        var dropdown_mosi_pin = block.getFieldValue('mosi_pin');
        var dropdown_sck_pin = block.getFieldValue('sck_pin');
        var dropdown_cs_pin = block.getFieldValue('cs_pin');
        var dropdown_dc_pin = block.getFieldValue('dc_pin');
        var dropdown_rst_pin = block.getFieldValue('rst_pin');
        var number_width = block.getFieldValue('width');
        var number_high = block.getFieldValue('high');
        // TODO: Assemble Python into code variable.
        var code = '...\n';
        return code;
    };

Blockly.Blocks['tft_lcd_clear'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "tft_lcd_clear",
                "message0": "xóa màn hình TFT",
                "previousStatement": null,
                "nextStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              }
        );
        }
    };

Blockly.Python['tft_lcd_clear'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    return code;
};

Blockly.Blocks['tft_lcd_print'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "tft_lcd_print",
                "message0": "hiện lên TFT LCD  %1%2 tại x %3%4 y %5%6 font chữ %7",
                "args0": [
                  {
                        type: "input_dummy",
                  },
                  {
                    "type": "field_input",
                    "name": "text",
                    "text": "thông tin"
                  },
                  {
                    type: "input_dummy",
                  },
                  {
                    "type": "field_number",
                    "name": "x",
                    "value": 0
                  },
                  {
                    type: "input_dummy",
                  },
                  {
                    "type": "field_number",
                    "name": "y",
                    "value": 0
                  },
                  {
                    "type": "field_dropdown",
                    "name": "font",
                    "options": [
                      [
                        "minimum",
                        "glcdfont"
                      ],
                      [
                        "cỡ 14",
                        "tt14"
                      ],
                      [
                        "cỡ 24",
                        "tt24"
                      ],
                      [
                        "cỡ 32",
                        "tt32"
                      ]
                    ]
                  }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              }
        );
            }
};
Blockly.Python['tft_lcd_print'] = function(block) {
    var text_text = block.getFieldValue('text');
    var number_x = block.getFieldValue('x');
    var number_y = block.getFieldValue('y');
    var dropdown_font = block.getFieldValue('font');
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    return code;
};
Blockly.Blocks['tft_lcd_draw'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "tft_lcd_draw",
                "message0": "vẽ  %1 dài %2%3 rộng %4%5 tại x %6%7 y %8%9 tỉ lệ màu R %10%11 G %12%13 B %14%15",
                "args0": [
                  {
                    "type": "field_dropdown",
                    "name": "shape",
                    "options": [
                      [
                        "chữ nhật rỗng",
                        "draw_rectangle"
                      ],
                      [
                        "hình chữ nhật",
                        "fill_rectangle"
                      ],
                      [
                        "đa giác",
                        "draw_polygon"
                      ],
                      [
                        "đường elip",
                        "draw_ellipse"
                      ],
                      [
                        "hình elip",
                        "fill_ellipse"
                      ]
                    ]
                  },
                  {
                    type: "input_dummy",
                  },
                  {
                    "type": "field_number",
                    "name": "w",
                    "value": 0
                  },
                  {
                    type: "input_dummy",
                  },
                  {
                    "type": "field_number",
                    "name": "h",
                    "value": 0
                  },
                  {
                    type: "input_dummy",
                  },
                  {
                    "type": "field_number",
                    "name": "x",
                    "value": 0
                  },
                  {
                    type: "input_dummy",
                  },
                  {
                    "type": "field_number",
                    "name": "y",
                    "value": 0
                  },
                  {
                    type: "input_dummy",
                  },
                  {
                    "type": "field_number",
                    "name": "r",
                    "value": 0,
                    "min": 0,
                    "max": 255
                  },
                  {
                    type: "input_dummy",
                  },
                  {
                    "type": "field_number",
                    "name": "g",
                    "value": 0,
                    "min": 0,
                    "max": 255
                  },
                  {
                    type: "input_dummy",
                  },
                  {
                    "type": "field_number",
                    "name": "b",
                    "value": 0,
                    "min": 0,
                    "max": 255
                  }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              }
        );
            }
};
Blockly.Python['tft_lcd_draw'] = function(block) {
    var dropdown_shape = block.getFieldValue('shape');
    var number_w = block.getFieldValue('w');
    var number_h = block.getFieldValue('h');
    var number_x = block.getFieldValue('x');
    var number_y = block.getFieldValue('y');
    var number_r = block.getFieldValue('r');
    var number_g = block.getFieldValue('g');
    var number_b = block.getFieldValue('b');
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    return code;
};

Blockly.Blocks['tft_lcd_draw_text'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "tft_lcd_draw_text",
                "message0": "hiện lên TFT LCD  %1%2 tại x %3%4 y %5%6 màu R %7%8 G %9%10 B %11%12",
                "args0": [
                  {
                    type: "input_dummy",
                  }, 
                  {
                    "type": "field_input",
                    "name": "text",
                    "text": "thông tin"
                  },
                  {
                    type: "input_dummy",
                  },
                  {
                    "type": "field_number",
                    "name": "x",
                    "value": 0
                  },
                  {
                    type: "input_dummy",
                  },
                  {
                    "type": "field_number",
                    "name": "y",
                    "value": 0
                  },
                  {
                    type: "input_dummy",
                  },
                  {
                    "type": "field_number",
                    "name": "r",
                    "value": 0
                  },
                  {
                    type: "input_dummy",
                  },
                  {
                    "type": "field_number",
                    "name": "g",
                    "value": 0
                  },
                  {
                    type: "input_dummy",
                  },
                  {
                    "type": "field_number",
                    "name": "b",
                    "value": 0
                  }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              }
        );
            }
};

Blockly.Python['tft_lcd_draw_text'] = function(block) {
    var text_text = block.getFieldValue('text');
    var number_x = block.getFieldValue('x');
    var number_y = block.getFieldValue('y');
    var number_r = block.getFieldValue('r');
    var number_g = block.getFieldValue('g');
    var number_b = block.getFieldValue('b');
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    return code;
};



