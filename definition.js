Blockly.Blocks['tft_lcd_create'] = {
    init: function () {
      this.jsonInit(
        {
            "type": "tft_lcd_create",
            "message0": "khởi tạo màn hình TFT chân MISO %1MOSI %2SCK %3CS %4DC %5RST %6rộng %7 %8cao %9 %10 hướng %11%12",
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
                "type": "input_dummy",
              },
              {
                "type": "input_value",
                "name": "width",
                "value": 240
              },
              {
                "type": "input_dummy",
              },
              {
                "type": "input_value",
                "name": "high",
                "value": 320
              },
              {
                "type": "input_dummy",
              },
              {
                "type": "input_value",
                "name": "rotation",
                "value": 0
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#370ACD",
            "tooltip": "",
            "helpUrl": ""
          }
      );
        }
    };

    Blockly.Python['tft_lcd_create'] = function(block) {
        Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
        Blockly.Python.definitions_['import_yolobit_tft_lcd'] = 'from tft_lcd import ILI9341, color565';
        Blockly.Python.definitions_['import_spi'] = 'from machine import Pin, SPI';
        Blockly.Python.definitions_['import_font_glcd'] = 'import glcdfont';
        Blockly.Python.definitions_['import_font_tt14'] = 'import tt14';
        Blockly.Python.definitions_['import_font_tt24'] = 'import tt24';
        Blockly.Python.definitions_['import_font_tt32'] = 'import tt32';
        var miso_pin = block.getFieldValue('miso_pin');
        var mosi_pin = block.getFieldValue('mosi_pin');
        var sck_pin = block.getFieldValue('sck_pin');
        var cs_pin = block.getFieldValue('cs_pin');
        var dc_pin = block.getFieldValue('dc_pin');
        var rst_pin = block.getFieldValue('rst_pin');
        var width = Blockly.Python.valueToCode(block, 'width', Blockly.Python.ORDER_ATOMIC);
        var high = Blockly.Python.valueToCode(block, 'high', Blockly.Python.ORDER_ATOMIC);
        var r = Blockly.Python.valueToCode(block, 'rotation', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = 'spi = SPI(2, baudrate=20000000, miso=Pin('+miso_pin+'.pin),mosi=Pin('+mosi_pin+'.pin), sck=Pin('+sck_pin+'.pin))\n'+ 'display = ILI9341(spi, cs=Pin('+cs_pin+'.pin), dc=Pin('+dc_pin+'.pin), rst=Pin('+rst_pin+'.pin), w='+width+', h='+high+', r='+r+')\n';
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
                "colour": "#370ACD",
                "tooltip": "",
                "helpUrl": ""
              }
        );
        }
    };

Blockly.Python['tft_lcd_clear'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'display.clear()\n';
    return code;
};

Blockly.Blocks['tft_lcd_print'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "tft_lcd_print",
                "message0": "hiện lên TFT LCD %1%2 tại x %3%4 y %5%6",
                "args0": [
                  {
                    "type": "input_dummy",
                  },
                  {
                    "type": "input_value",
                    "name": "text",
                    "text": "thông tin"
                  },
                  {
                    "type": "input_dummy",
                  },
                  {
                    "type": "input_value",
                    "name": "x",
                    "value": 0
                  },
                  {
                    "type": "input_dummy",
                  },
                  {
                    "type": "input_value",
                    "name": "y",
                    "value": 0
                  }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": "#370ACD",
                "tooltip": "",
                "helpUrl": ""
              }
        );
            }
};
Blockly.Python['tft_lcd_print'] = function(block) {
    var text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
    var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'display.set_pos('+x+','+y+')\n' + 'display.print('+text+')\n';
    return code;
};
Blockly.Blocks['tft_lcd_draw'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "tft_lcd_draw",
                "message0": "vẽ  %1 dài %3%2 rộng %5%4 tại x %7%6 y %9%8 tỉ lệ màu R %11%10 G %13%12 B %15%14",
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
                    "type": "input_dummy",
                  },
                  {
                    "type": "input_value",
                    "name": "w",
                    "value": 0
                  },
                  {
                    "type": "input_dummy",
                  },
                  {
                    "type": "input_value",
                    "name": "h",
                    "value": 0
                  },
                  {
                    "type": "input_dummy",
                  },
                  {
                    "type": "input_value",
                    "name": "x",
                    "value": 0
                  },
                  {
                    "type": "input_dummy",
                  },
                  {
                    "type": "input_value",
                    "name": "y",
                    "value": 0
                  },
                  {
                    "type": "input_dummy",
                  },
                  {
                    "type": "input_value",
                    "name": "r",
                    "value": 0,
                    "min": 0,
                    "max": 255
                  },
                  {
                    "type": "input_dummy",
                  },
                  {
                    "type": "input_value",
                    "name": "g",
                    "value": 0,
                    "min": 0,
                    "max": 255
                  },
                  {
                    "type": "input_dummy",
                  },
                  {
                    "type": "input_value",
                    "name": "b",
                    "value": 0,
                    "min": 0,
                    "max": 255
                  }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": "#370ACD",
                "tooltip": "",
                "helpUrl": ""
              }
        );
            }
};
Blockly.Python['tft_lcd_draw'] = function(block) {
    var w = Blockly.Python.valueToCode(block, 'w', Blockly.Python.ORDER_ATOMIC);
    var h = Blockly.Python.valueToCode(block, 'h', Blockly.Python.ORDER_ATOMIC);
    var shape = block.getFieldValue('shape');
    var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
    var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    var r = Blockly.Python.valueToCode(block, 'r', Blockly.Python.ORDER_ATOMIC);
    var g = Blockly.Python.valueToCode(block, 'g', Blockly.Python.ORDER_ATOMIC);
    var b = Blockly.Python.valueToCode(block, 'b', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'display.' + shape+'('+x+','+y+','+w+','+h+', color565('+r+','+g+','+b+'))\n';
    return code;
};

Blockly.Blocks['tft_lcd_draw_text'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "tft_lcd_draw_text",
                "message0": "hiện lên TFT LCD  %2%1 tại x %4%3 y %6%5 màu R %8%7 G %10%9 B %12%11",
                "args0": [
                  {
                    "type": "input_dummy",
                  }, 
                  {
                    "type": "input_value",
                    "name": "text",
                    "text": "thông tin"
                  },
                  {
                    "type": "input_dummy",
                  },
                  {
                    "type": "input_value",
                    "name": "x",
                    "value": 0
                  },
                  {
                    "type": "input_dummy",
                  },
                  {
                    "type": "input_value",
                    "name": "y",
                    "value": 0
                  },
                  {
                    "type": "input_dummy",
                  },
                  {
                    "type": "input_value",
                    "name": "r",
                    "value": 0
                  },
                  {
                    "type": "input_dummy",
                  },
                  {
                    "type": "input_value",
                    "name": "g",
                    "value": 0
                  },
                  {
                    "type": "input_dummy",
                  },
                  {
                    "type": "input_value",
                    "name": "b",
                    "value": 0
                  }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": "#370ACD",
                "tooltip": "",
                "helpUrl": ""
              }
        );
            }
};

Blockly.Python['tft_lcd_draw_text'] = function(block) {
    var text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
    var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    var r = Blockly.Python.valueToCode(block, 'r', Blockly.Python.ORDER_ATOMIC);
    var g = Blockly.Python.valueToCode(block, 'g', Blockly.Python.ORDER_ATOMIC);
    var b = Blockly.Python.valueToCode(block, 'b', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'display.draw_text8x8('+x+','+y+','+text+', color565('+r+','+g+','+b+'))\n';;
    return code;
};

Blockly.Blocks['tft_lcd_font'] = {
  init: function () {
      this.jsonInit(
          {
              "type": "tft_lcd_font",
              "message0": "chọn font chữ %1",
              "args0": [
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
                }],
              "previousStatement": null,
              "nextStatement": null,
              "colour": "#370ACD",
              "tooltip": "",
              "helpUrl": ""
            }
      );
      }
  };

Blockly.Python['tft_lcd_font'] = function(block) {
  var font = block.getFieldValue('font');
  // TODO: Assemble Python into code variable.
  var code = 'display.set_font('+font+')\n';
  return code;
};

Blockly.Blocks['tft_lcd_draw_line'] = {
  init: function () {
      this.jsonInit(
          {
              "type": "tft_lcd_draw_line",
              "message0": "vẽ %1 rộng %3%2 tại x %5%4 y %7%6 tỉ lệ màu R %9%8 G %11%10 B %13%12",
              "args0": [
                {
                  "type": "field_dropdown",
                  "name": "line",
                  "options": [
                    [
                      "đường thẳng",
                      "draw_vline"
                    ],
                    [
                      "đường ngang",
                      "draw_hline"
                    ],
                    [
                      "hình tròn",
                      "fill_circle"
                    ],
                    [
                      "đường tròn",
                      "draw_circle"
                    ]
                  ]
                },
                {
                  "type": "input_dummy",
                },
                {
                  "type": "input_value",
                  "name": "w",
                  "value": 0
                },
                {
                  "type": "input_dummy",
                },
                {
                  "type": "input_value",
                  "name": "x",
                  "value": 0
                },
                {
                  "type": "input_dummy",
                },
                {
                  "type": "input_value",
                  "name": "y",
                  "value": 0
                },
                {
                  "type": "input_dummy",
                },
                {
                  "type": "input_value",
                  "name": "r",
                  "value": 0,
                  "min": 0,
                  "max": 255
                },
                {
                  "type": "input_dummy",
                },
                {
                  "type": "input_value",
                  "name": "g",
                  "value": 0,
                  "min": 0,
                  "max": 255
                },
                {
                  "type": "input_dummy",
                },
                {
                  "type": "input_value",
                  "name": "b",
                  "value": 0,
                  "min": 0,
                  "max": 255
                }
              ],
              "previousStatement": null,
              "nextStatement": null,
              "colour": "#370ACD",
              "tooltip": "",
              "helpUrl": ""
            }
      );
          }
};

Blockly.Python['tft_lcd_draw_line'] = function(block) {
  var w = Blockly.Python.valueToCode(block, 'w', Blockly.Python.ORDER_ATOMIC);
  var line = block.getFieldValue('line');
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var r = Blockly.Python.valueToCode(block, 'r', Blockly.Python.ORDER_ATOMIC);
  var g = Blockly.Python.valueToCode(block, 'g', Blockly.Python.ORDER_ATOMIC);
  var b = Blockly.Python.valueToCode(block, 'b', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'display.' + line+'('+x+','+y+','+w+', color565('+r+','+g+','+b+'))\n';
  return code;
};

Blockly.Blocks['tft_lcd_draw_text_pickcolor'] = {
  init: function () {
      this.jsonInit(
          {
              "type": "tft_lcd_draw_text_pickcolor",
              "message0": "hiện lên TFT LCD  %2%1 tại x %4%3 y %6%5 màu %8%7",
              "args0": [
                {
                  "type": "input_dummy",
                }, 
                {
                  "type": "input_value",
                  "name": "text",
                  "text": "thông tin"
                },
                {
                  "type": "input_dummy",
                },
                {
                  "type": "input_value",
                  "name": "x",
                  "value": 0
                },
                {
                  "type": "input_dummy",
                },
                {
                  "type": "input_value",
                  "name": "y",
                  "value": 0
                },
                {
                  "type": "input_dummy",
                },
                { "type": "input_value", 
                "name": "COLOR" 
                }
              ],
              "previousStatement": null,
              "nextStatement": null,
              "colour": "#370ACD",
              "tooltip": "",
              "helpUrl": ""
            }
      );
          }
};

Blockly.Python['tft_lcd_draw_text_pickcolor'] = function(block) {
  var text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var value_color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'display.draw_text8x8('+x+','+y+','+text+', color565(0x'+value_color[[1]+value_color[2]]+',0x'+value_color[[2]+value_color[3]]+',0x'+value_color[[5]+value_color[6]]+'))\n';;
  return code;
};
