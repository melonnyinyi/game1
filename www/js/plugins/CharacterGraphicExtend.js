//=============================================================================
// CharacterGraphicExtend.js
// ----------------------------------------------------------------------------
// Copyright (c) 2015 Triacontane
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// ----------------------------------------------------------------------------
// Version
// 1.4.1 2016/11/27 T_dashMotion.js�Ƃ̋���������
// 1.4.0 2016/11/21 �����̃y�[�W�ɑ΂��ĕʁX�̉摜�����蓖�Ă�@�\��ǉ����܂����B
// 1.3.0 2016/07/16 �ȉ��̋@�\��ǉ����܂����B
//                  ���i���C�x���g�O���t�B�b�N�Ƃ��ė��p�\
//                  �C�x���g�摜�̌��_��ύX����@�\�A�C�x���g�摜�̉�ʕ\���ʒu���Βl�w�肷��@�\
// 1.2.1 2016/05/08 HalfMove.js�Ƃ̋���������
// 1.2.0 2016/03/19 �퓬�������ɃC�x���g���������Ȃ��ݒ��ǉ����܂����B
// 1.1.2 2016/03/04 �{�̃o�[�W����1.1.0�ɍ��킹�ăL�����N�^�[�̏�Z�ƃX�N���[���ɑΉ����܂����B
// 1.1.1 2016/01/21 �����΍�iYEP_MessageCore.js�j
// 1.1.0 2016/01/11 �L�����N�^�[�ɉ�]�p��ݒ肷��@�\��ǉ�
//                  �ړ����[�g�̎w��̃X�N���v�g����A��]�p�A�g�嗦�A�ʒu�������ł���@�\��ǉ�
// 1.0.0 2016/01/08 ����
// ----------------------------------------------------------------------------
// [Blog]   : http://triacontane.blogspot.jp/
// [Twitter]: https://twitter.com/triacontane/
// [GitHub] : https://github.com/triacontane/
//=============================================================================

/*:
 * @plugindesc �L�����N�^�[�O���t�B�b�N�\���g���v���O�C��
 * @author �g���A�R���^��
 *
 * @param �C�x���g��������
 * @desc �G���J�E���g�������ɃC�x���g����u��������G�t�F�N�g�𖳌��ɂ��܂��B
 * @default OFF
 *
 * @help �C�x���g�̃O���t�B�b�N�\�����@���g�����đ��ʂȕ\�����\�ɂ��܂��B
 * �C�x���g�̃������ɏ���̏����ŋL�����Ă��������B
 * ���ڂ̓J���}�ŋ�؂��Ă��������B�����ɂ͕��͂̕\���Ɠ������䕶�����g�p�ł��܂��B
 * �܂��A�y�[�W���ɁuA�v�Ɠ��͂���ƑS�Ẵy�[�W���ΏۂɂȂ�܂��B
 *
 * <CG�s�N�`��:�i�y�[�W���j,�i�t�@�C�����j>
 * �w�肵���y�[�W���L���ɂȂ����ꍇ�̃O���t�B�b�N���s�N�`���摜����擾���܂��B
 * �g���q�͕s�v�ł��B���s�A�j���ҋ@�A�j���͖���������܂��B
 *
 * ��F<CG�s�N�`��:1,Test> or <CGPicture:1,Test>
 *
 * �Z�ǉ��@�\
 * �����̃y�[�W�ɑ΂��ĕʁX�̉摜�����蓖�Ă����ꍇ��
 * �y�[�W���ƂɃ^�O���쐬���Ă��������B
 * �ȉ��̗Ⴞ��1�y�[�W�ڂł�aaa.png���A2�y�[�W�ڂł�bbb.png���g�p����܂��B
 * ���̃^�O�����l�ł��B
 * ��F<CG�s�N�`��:1,aaa><CG�s�N�`��:2,bbb>
 *
 * <CG�G�L����:�i�y�[�W���j,�i�t�@�C�����j>
 * �w�肵���y�[�W���L���ɂȂ����ꍇ�̃O���t�B�b�N��G�L�����摜����擾���܂��B
 * �g���q�͕s�v�ł��B���s�A�j���ҋ@�A�j���͖���������܂��B
 *
 * ��F<CG�G�L����:1,Bat> or <CGEnemy:1,Bat>
 *
 * <CG�A�C�R��:�i�y�[�W���j,�i�C���f�b�N�X�j>
 * �w�肵���y�[�W���L���ɂȂ����ꍇ�̃O���t�B�b�N���A�C�R���摜����擾���܂��B
 * ���s�A�j���ҋ@�A�j���͖���������܂��B
 *
 * ��F<CG�A�C�R��:1,128> or <CGIcon:1,128>
 *
 * <CG�t�F�C�X:�i�y�[�W���j,�i�t�@�C�����j�i�C���f�b�N�X�j>
 * �w�肵���y�[�W���L���ɂȂ����ꍇ�̃O���t�B�b�N���t�F�C�X�摜����擾���܂��B
 * �g���q�͕s�v�ł��B���s�A�j���ҋ@�A�j���͖���������܂��B
 *
 * ��F<CG�t�F�C�X:1,Actor1,4> or <CGFace:1,Actor1,4>
 *
 * <CG���i:�i�y�[�W���j,�i�t�@�C�����j>
 * �w�肵���y�[�W���L���ɂȂ����ꍇ�̃O���t�B�b�N�����i�摜����擾���܂��B
 * �g���q�͕s�v�ł��B���s�A�j���ҋ@�A�j���͖���������܂��B
 *
 * ��F<CG���i:1,Test> or <CGParallaxes:1,Test>
 *
 * �v���ӁI�@�����̃������Ńt�@�C�����w�肵���ꍇ�A�f�v���C�����g����
 * ���g�p�t�@�C���Ƃ��ď��O�����\��������܂��B
 * ���̏ꍇ�A�폜���ꂽ�t�@�C������꒼�����̑Ή����K�v�ł��B
 *
 * <CG�^�C��:�i�y�[�W���j,�i�����j,�i�����j>
 * �w�肵���y�[�W���L���ɂȂ����ꍇ�̃O���t�B�b�N���^�C���}�b�v�摜����擾���܂��B
 * �����ƍ������w�肵�Ė{�I��x�b�h����̃C�x���g�ŕ\���ł��܂��B
 * �C�x���g�̉摜�I�������ԍ���̃^�C����I�����Ă��������B
 *
 * ��F<CG�^�C��:1,2,2> or <CGTile:1,2,2>
 *
 * <CG�V�t�g:�i�y�[�W���j,�iX���W�j,�iY���W�j>
 * �w�肵���y�[�W���L���ɂȂ����ꍇ�̃O���t�B�b�N�\���ʒu��
 * �w�肵���s�N�Z�������炵�ĕ\�����܂��B
 *
 * ��F<CG�V�t�g:1,16,-16> or <CGShift:1,16,-16>
 *
 * <CG�v���C�I���e�B:�i�y�[�W���j,�i�v���C�I���e�B�j>
 * �w�肵���y�[�W���L���ɂȂ����ꍇ�̕\���D��x��ݒ肵�܂��B
 * 1�`9�܂ł̒l��ݒ�ł��܂��B
 *
 * ��F<CG�v���C�I���e�B:1,6> or <CGPriority:1,6>
 *
 * �����ꂼ��̃v���C�I���e�B�̒l
 * 0 : ���w�^�C��
 * 1 : �ʏ�L�����̉�
 * 3 : �ʏ�L�����Ɠ���
 * 4 : ��w�^�C��
 * 5 : �ʏ�L�����̏�
 * 6 : ��s�D�̉e
 * 7 : �t�L�_�V
 * 8 : �A�j���[�V����
 * 9 : �}�b�v�^�b�`�̍s����i�������郄�c�j
 *
 * <CG�������@:�i�y�[�W���j,�i�������@�j>
 * �w�肵���y�[�W���L���ɂȂ����ꍇ�̃O���t�B�b�N�̍������@��ݒ肵�܂��B
 * 0:�ʏ� 1:���Z 2:��Z 3:�X�N���[��
 *
 * ��F<CG�������@:1,2> or <CGBlendType:1,2>
 *
 * <CG�g�嗦:�i�y�[�W���j,�iX�g�嗦�j�iY�g�嗦�j>
 * �w�肵���y�[�W���L���ɂȂ����ꍇ�̃O���t�B�b�N�̊g�嗦��ݒ肵�܂��B
 * ���̒l��ݒ肷��Ɖ摜�����]���܂��B
 *
 * ��F<CG�g�嗦:1,100,-100> or <CGScale:1,100,-100>
 *
 * <CG��]�p:�i�y�[�W���j,�i��]�p�j>
 * �w�肵���y�[�W���L���ɂȂ����ꍇ�̃O���t�B�b�N�̉�]�p��ݒ肵�܂��B
 * ��]�̒��S�́A�L�����N�^�[�̑����ɂȂ�܂��B0�`360�͈͓̔��Őݒ肵�Ă��������B
 *
 * ��F<CG��]�p:1,180> or <CGAngle:1,180>
 *
 * <CG���_:�i�y�[�W���j,�iX���_�j�iY���_�j>
 * �w�肵���y�[�W���L���ɂȂ����ꍇ�̃O���t�B�b�N�̌��_(0...100)��ݒ肵�܂��B
 * �f�t�H���g�ł�X���_��50�AY���_��100(�摜�̑��������_�ɂȂ�)�ł��B
 *
 * ��F<CG���_:1,0,0> or <CGOrigin:1,100,100>
 *
 * <CG��΍��W:�i�y�[�W���j,�iX���W�j,�iY���W�j>
 * �w�肵���y�[�W���L���ɂȂ����ꍇ�̃O���t�B�b�N�\���ʒu��
 * ��΍��W(�s�N�`���̂悤�Ƀ}�b�v�̃X�N���[���Ƃ͖��֌W�ɕ\������)�ɂ��܂��B
 * �������A�C�x���g���̂��̂̈ʒu�͕ς��܂���B
 *
 * ��F<CG��΍��W:1,16,-16> or <CGAbsolute:1,16,-16>
 *
 * �Z�X�N���v�g�i���x�Ȑݒ�B�ړ����[�g�̎w�肩��X�N���v�g�Ŏ��s�j
 *
 * �E�g�嗦�̐ݒ�
 * this.setScale(�iX���W�j,�iY���W�j);
 * ��Fthis.setScale(100, 100);
 *
 * �E��]�p�̐ݒ�
 * this.setAngle(�i��]�p�j);
 * ��Fthis.setAngle(180);
 *
 * �E�s�N�Z���P�ʈʒu�̐ݒ�
 * this.shiftPosition(�iX���W�j,�iY���W�j);
 * ��Fthis.shiftPosition(24, 24);
 *
 * ���̃v���O�C���ɂ̓v���O�C���R�}���h�͂���܂���B
 *
 * ���p�K��F
 *  ��҂ɖ��f�ŉ��ρA�Ĕz�z���\�ŁA���p�`�ԁi���p�A18�֗��p���j
 *  �ɂ��Ă������͂���܂���B
 *  ���̃v���O�C���͂������Ȃ��̂��̂ł��B
 */
(function() {
    'use strict';
    var pluginName = 'CharacterGraphicExtend';

    var getParamBoolean = function(paramNames) {
        var value = getParamOther(paramNames);
        return (value || '').toUpperCase() === 'ON';
    };

    var getParamOther = function(paramNames) {
        if (!Array.isArray(paramNames)) paramNames = [paramNames];
        for (var i = 0; i < paramNames.length; i++) {
            var name = PluginManager.parameters(pluginName)[paramNames[i]];
            if (name) return name;
        }
        return null;
    };

    var getArgArrayString = function(args, upperFlg) {
        var values = getArgString(args, upperFlg).split(',');
        for (var i = 0; i < values.length; i++) values[i] = values[i].trim();
        return values;
    };

    var getArgString = function(args, upperFlg) {
        args = convertEscapeCharacters(args);
        return upperFlg ? args.toUpperCase() : args;
    };

    var getArgNumber = function(arg, min, max) {
        if (arguments.length < 2) min = -Infinity;
        if (arguments.length < 3) max = Infinity;
        return (parseInt(convertEscapeCharacters(arg), 10) || 0).clamp(min, max);
    };

    var convertEscapeCharacters = function(text) {
        if (text == null) text = '';
        text = text.replace(/\\/g, '\x1b');
        text = text.replace(/\x1b\x1b/g, '\\');
        text = text.replace(/\x1bV\[(\d+)\]/gi, function() {
            return $gameVariables.value(parseInt(arguments[1], 10));
        }.bind(this));
        text = text.replace(/\x1bV\[(\d+)\]/gi, function() {
            return $gameVariables.value(parseInt(arguments[1], 10));
        }.bind(this));
        text = text.replace(/\x1bN\[(\d+)\]/gi, function() {
            var actor = parseInt(arguments[1], 10) >= 1 ? $gameActors.actor(parseInt(arguments[1], 10)) : null;
            return actor ? actor.name() : '';
        }.bind(this));
        text = text.replace(/\x1bP\[(\d+)\]/gi, function() {
            var actor = parseInt(arguments[1], 10) >= 1 ? $gameParty.members()[parseInt(arguments[1], 10) - 1] : null;
            return actor ? actor.name() : '';
        }.bind(this));
        text = text.replace(/\x1bG/gi, TextManager.currencyUnit);
        return text;
    };

    //=============================================================================
    // �p�����[�^�̎擾�ƃo���f�[�V����
    //=============================================================================
    var paramEventHideInvalid = getParamBoolean(['EventHideInvalid', '�C�x���g��������']);

    //=============================================================================
    // Game_CharacterBase
    //  �g������v���p�e�B���`���܂��B
    //=============================================================================
    var _DataManager_extractMetadata = DataManager.extractMetadata;
    DataManager.extractMetadata = function(data) {
        _DataManager_extractMetadata.apply(this, arguments);
        this.extractMetadataArray(data);
    };

    DataManager.extractMetadataArray = function(data) {
        var re = /<([^<>:]+)(:?)([^>]*)>/g;
        data.metaArray = {};
        var match = true;
        while (match) {
            match = re.exec(data.note);
            if (match) {
                var metaName = match[1];
                data.metaArray[metaName] = data.metaArray[metaName] || [];
                data.metaArray[metaName].push(match[2] === ':' ? match[3] : true);
            }
        }
    };

    //=============================================================================
    // Game_CharacterBase
    //  �g������v���p�e�B���`���܂��B
    //=============================================================================
    var _Game_CharacterBase_initMembers      = Game_CharacterBase.prototype.initMembers;
    Game_CharacterBase.prototype.initMembers = function() {
        _Game_CharacterBase_initMembers.apply(this, arguments);
        this.clearCgInfo();
    };

    Game_CharacterBase.prototype.clearCgInfo = function() {
        this._customResource  = null;
        this._graphicColumns  = 1;
        this._graphicRows     = 1;
        this._additionalX     = 0;
        this._additionalY     = 0;
        this._customPriority  = -1;
        this._scaleX          = 100;
        this._scaleY          = 100;
        this._tileBlockWidth  = 1;
        this._tileBlockHeight = 1;
        this._angle           = 0;
        this._originX         = null;
        this._originY         = null;
        this._absoluteX       = null;
        this._absoluteY       = null;
        this.setBlendMode(0);
    };

    Game_CharacterBase.prototype.customResource = function() {
        return this._customResource;
    };

    Game_CharacterBase.prototype.graphicColumns = function() {
        return this._graphicColumns;
    };

    Game_CharacterBase.prototype.graphicRows = function() {
        return this._graphicRows;
    };

    Game_CharacterBase.prototype.scaleX = function() {
        return this._scaleX;
    };

    Game_CharacterBase.prototype.scaleY = function() {
        return this._scaleY;
    };

    Game_CharacterBase.prototype.setScale = function(x, y) {
        this._scaleX = x;
        this._scaleY = y;
    };

    Game_CharacterBase.prototype.originX = function() {
        return this._originX;
    };

    Game_CharacterBase.prototype.originY = function() {
        return this._originY;
    };

    Game_CharacterBase.prototype.setOrigin = function(x, y) {
        this._originX = x / 100;
        this._originY = y / 100;
    };

    Game_CharacterBase.prototype.absoluteX = function() {
        return this._absoluteX;
    };

    Game_CharacterBase.prototype.absoluteY = function() {
        return this._absoluteY;
    };

    Game_CharacterBase.prototype.setAbsolute = function(x, y) {
        this._absoluteX = x;
        this._absoluteY = y;
    };

    Game_CharacterBase.prototype.angle = function() {
        return this._angle;
    };

    Game_CharacterBase.prototype.setAngle = function(angle) {
        this._angle = angle;
    };

    Game_CharacterBase.prototype.shiftPosition = function(x, y) {
        this._additionalX = x;
        this._additionalY = y;
    };

    Game_CharacterBase.prototype.tileBlockWidth = function() {
        return this._tileBlockWidth;
    };

    Game_CharacterBase.prototype.tileBlockHeight = function() {
        return this._tileBlockHeight;
    };

    var _Game_CharacterBase_pos      = Game_CharacterBase.prototype.pos;
    Game_CharacterBase.prototype.pos = function(x, y) {
        if (this.tileBlockWidth() >= 2) {
            return (this._x - this.tileBlockWidth() / 2 <= x && this._x + this.tileBlockWidth() / 2 >= x) && this._y === y;
        } else {
            return _Game_CharacterBase_pos.apply(this, arguments);
        }
    };

    var _Game_CharacterBase_screenX      = Game_CharacterBase.prototype.screenX;
    Game_CharacterBase.prototype.screenX = function() {
        return this.absoluteX() != null ? this.absoluteX() : _Game_CharacterBase_screenX.apply(this, arguments) + this._additionalX;
    };

    var _Game_CharacterBase_screenY      = Game_CharacterBase.prototype.screenY;
    Game_CharacterBase.prototype.screenY = function() {
        return this.absoluteY() != null ? this.absoluteY() : _Game_CharacterBase_screenY.apply(this, arguments) + this._additionalY;
    };

    var _Game_CharacterBase_screenZ      = Game_CharacterBase.prototype.screenZ;
    Game_CharacterBase.prototype.screenZ  = function() {
        return this._customPriority > 0 ? this._customPriority : _Game_CharacterBase_screenZ.apply(this, arguments);
    };

    //=============================================================================
    // Game_Event
    //  �g������v���p�e�B���`���܂��B
    //=============================================================================
    Game_Event.blendModeParams = {
        '1': 1, '���Z': 1,
        '2': 2, '��Z': 2,
        '3': 3, '�X�N���[��': 3
    };

    Game_Event.prototype.getMetaCg = function(names) {
        if (!Array.isArray(names)) names = [names];
        var metaParams = this.getMetaParameter(names);
        if (!metaParams) return null;
        var result = null;
        metaParams.some(function(metaParam) {
            var params = getArgArrayString(metaParam);
            if (this.isValidCgeParam(params)) {
                result = params;
            }
            return result;
        }.bind(this));
        return result;
    };

    Game_Event.prototype.getMetaParameter = function(names) {
        var metaParams = null;
        names.some(function(name) {
            if (!metaParams || metaParams[0] === '') {
                metaParams = this.event().metaArray['CG' + name];
            }
            return metaParams;
        }.bind(this));
        return metaParams;
    };

    Game_Event.prototype.isValidCgeParam = function(params) {
        var pageIndex = getArgNumber(params[0]);
        return params.length > 1 && (pageIndex === this._pageIndex + 1 || params[0].toUpperCase() === 'A');
    };

    var _Game_Event_setupPageSettings      = Game_Event.prototype.setupPageSettings;
    Game_Event.prototype.setupPageSettings = function() {
        this.clearCgInfo();
        _Game_Event_setupPageSettings.apply(this, arguments);
        var cgParams = this.getMetaCg(['�V�t�g', 'Shift']);
        if (cgParams) {
            this.shiftPosition(getArgNumber(cgParams[1]), getArgNumber(cgParams[2]));
        }
        cgParams = this.getMetaCg(['�v���C�I���e�B', 'Priority']);
        if (cgParams) {
            this._customPriority = getArgNumber(cgParams[1], 0, 10);
        }
        cgParams = this.getMetaCg(['�������@', 'BlendType']);
        if (cgParams) {
            var blendMode = Game_Event.blendModeParams[cgParams[1]] || 0;
            this.setBlendMode(blendMode);
        }
        cgParams = this.getMetaCg(['�g�嗦', 'Scale']);
        if (cgParams) {
            this._scaleX = getArgNumber(cgParams[1]);
            this._scaleY = getArgNumber(cgParams[2]);
        }
        cgParams = this.getMetaCg(['��]�p', 'Angle']);
        if (cgParams) {
            this.setAngle(getArgNumber(cgParams[1], 0, 360));
        }
        cgParams = this.getMetaCg(['���_', 'Origin']);
        if (cgParams) {
            this.setOrigin(getArgNumber(cgParams[1]), getArgNumber(cgParams[2]));
        }
        cgParams = this.getMetaCg(['��΍��W', 'Absolute']);
        if (cgParams) {
            this.setAbsolute(getArgNumber(cgParams[1]), getArgNumber(cgParams[2]));
        }
    };

    var _Game_Event_setTileImage      = Game_Event.prototype.setTileImage;
    Game_Event.prototype.setTileImage = function(tileId) {
        _Game_Event_setTileImage.apply(this, arguments);
        var cgParams = this.getMetaCg(['�^�C��', 'Tile']);
        if (cgParams) {
            this._tileBlockWidth  = getArgNumber(cgParams[1]);
            this._tileBlockHeight = getArgNumber(cgParams[2]);
        }
    };

    var _Game_Event_setImage      = Game_Event.prototype.setImage;
    Game_Event.prototype.setImage = function(characterName, characterIndex) {
        var cgParams = this.getMetaCg(['�s�N�`��', 'Picture']);
        if (cgParams) {
            this._customResource = 'Picture';
            this._graphicColumns = 1;
            this._graphicRows    = 1;
            arguments[0]         = cgParams[1];
        }
        cgParams = this.getMetaCg(['�G�L����', 'Enemy']);
        if (cgParams) {
            this._customResource = 'Enemy';
            this._graphicColumns = 1;
            this._graphicRows    = 1;
            arguments[0]         = cgParams[1];
        }
        cgParams = this.getMetaCg(['�A�C�R��', 'Icon']);
        if (cgParams) {
            this._customResource = 'System';
            this._graphicColumns = 16;
            this._graphicRows    = 20;
            arguments[0]         = 'IconSet';
            arguments[1]         = getArgNumber(cgParams[1], 0, 16 * 20 - 1);
        }
        cgParams = this.getMetaCg(['�t�F�C�X', 'Face']);
        if (cgParams) {
            this._customResource = 'Face';
            this._graphicColumns = 4;
            this._graphicRows    = 2;
            arguments[0]         = cgParams[1];
            arguments[1]         = getArgNumber(cgParams[2], 0, 4 * 2 - 1);
        }
        cgParams = this.getMetaCg(['���i', 'Parallax']);
        if (cgParams) {
            this._customResource = 'Parallax';
            this._graphicColumns = 1;
            this._graphicRows    = 1;
            arguments[0]         = cgParams[1];
        }
        _Game_Event_setImage.apply(this, arguments);
    };

    //=============================================================================
    // Spriteset_Map
    //  �C�x���g����������G�t�F�N�g�𖳌��ɂ��܂��B
    //=============================================================================
    var _Spriteset_Map_hideCharacters      = Spriteset_Map.prototype.hideCharacters;
    Spriteset_Map.prototype.hideCharacters = function() {
        if (!paramEventHideInvalid) _Spriteset_Map_hideCharacters.apply(this, arguments);
    };

    //=============================================================================
    // Sprite_Character
    //  �g�������v���p�e�B�Ɋ�Â��ăG�t�F�N�g�𔽉f�����܂��B
    //=============================================================================
    var _Sprite_Character_updateBitmap      = Sprite_Character.prototype.updateBitmap;
    Sprite_Character.prototype.updateBitmap = function() {
        if (this.isImageChanged()) this._customResource = this._character.customResource();
        _Sprite_Character_updateBitmap.apply(this, arguments);
        this.updateExtend();
    };

    var _Sprite_Character_update = Sprite_Character.prototype.update;
    Sprite_Character.prototype.update = function() {
        _Sprite_Character_update.apply(this, arguments);
        if (this.updateDashMotion) {
            this.resolveConflictForDashMotion();
        }
    };

    Sprite_Character.prototype.resolveConflictForDashMotion = function() {
        if (this._character.scaleY() !== 100) {
            this.scale.y = this._character.scaleY() / 100 * this.scale.y;
        }
        if (this._character.angle() !== 0) {
            var angle = this._character.angle() * Math.PI / 180;
            if (this.rotation !== angle) this.rotation = angle;
        }
    };

    Sprite_Character.prototype.updateExtend = function() {
        this.scale.x = this._character.scaleX() / 100;
        this.scale.y = this._character.scaleY() / 100;
        var originX  = this._character.originX();
        if (originX != null) this.anchor.x = originX;
        var originY = this._character.originY();
        if (originY != null) this.anchor.y = originY;
        var angle = this._character.angle() * Math.PI / 180;
        if (this.rotation !== angle) this.rotation = angle;
    };

    var _Sprite_Character_setFrame      = Sprite_Character.prototype.setFrame;
    Sprite_Character.prototype.setFrame = function(sx, sy, pw, ph) {
        _Sprite_Character_setFrame.call(this, sx, sy,
            pw * this._character.tileBlockWidth(), ph * this._character.tileBlockHeight());
    };

    var _Sprite_Character_isImageChanged      = Sprite_Character.prototype.isImageChanged;
    Sprite_Character.prototype.isImageChanged = function() {
        return _Sprite_Character_isImageChanged.apply(this, arguments) ||
            this._customResource !== this._character.customResource();
    };

    var _Sprite_Character_setCharacterBitmap      = Sprite_Character.prototype.setCharacterBitmap;
    Sprite_Character.prototype.setCharacterBitmap = function() {
        if (this._customResource) {
            this.bitmap = ImageManager['load' + this._customResource](this._characterName);
        } else {
            _Sprite_Character_setCharacterBitmap.apply(this, arguments);
        }
    };

    var _Sprite_Character_characterBlockX      = Sprite_Character.prototype.characterBlockX;
    Sprite_Character.prototype.characterBlockX = function() {
        if (this._customResource) {
            return this._characterIndex % this._character.graphicColumns();
        } else {
            return _Sprite_Character_characterBlockX.apply(this, arguments);
        }
    };

    var _Sprite_Character_characterBlockY      = Sprite_Character.prototype.characterBlockY;
    Sprite_Character.prototype.characterBlockY = function() {
        if (this._customResource) {
            return Math.floor(this._characterIndex / this._character.graphicColumns());
        } else {
            return _Sprite_Character_characterBlockY.apply(this, arguments);
        }
    };

    var _Sprite_Character_patternWidth      = Sprite_Character.prototype.patternWidth;
    Sprite_Character.prototype.patternWidth = function() {
        if (this._customResource) {
            return this.bitmap.width / this._character.graphicColumns();
        } else {
            return _Sprite_Character_patternWidth.apply(this, arguments);
        }
    };

    var _Sprite_Character_patternHeight      = Sprite_Character.prototype.patternHeight;
    Sprite_Character.prototype.patternHeight = function() {
        if (this._customResource) {
            return this.bitmap.height / this._character.graphicRows();
        } else {
            return _Sprite_Character_patternHeight.apply(this, arguments);
        }
    };

    var _Sprite_Character_characterPatternX      = Sprite_Character.prototype.characterPatternX;
    Sprite_Character.prototype.characterPatternX = function() {
        if (this._customResource) {
            return 0;
        } else {
            return _Sprite_Character_characterPatternX.apply(this, arguments);
        }
    };

    var _Sprite_Character_characterPatternY      = Sprite_Character.prototype.characterPatternY;
    Sprite_Character.prototype.characterPatternY = function() {
        if (this._customResource) {
            return 0;
        } else {
            return _Sprite_Character_characterPatternY.apply(this, arguments);
        }
    };
})();