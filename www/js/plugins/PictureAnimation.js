//=============================================================================
// PictureAnimation.js
// ----------------------------------------------------------------------------
// Copyright (c) 2015 Triacontane
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// ----------------------------------------------------------------------------
// Version
// 1.4.0 2016/09/03 �A�j���[�V�����ɍ��킹�Ďw�肵��SE�����t����@�\��ǉ�
// 1.3.2 2016/05/11 �N���X�t�F�[�h���w�肵�Ă����ꍇ��2��ڂ̃A�j���\���ŃG���[�ɂȂ�ꍇ����������C��
// 1.3.1 2016/03/15 �s�N�`����ɐ퓬�A�j����\������v���O�C���uPictureOnAnimation�v�Ƃ̋���������
//                  ���_�𒆉������s�N�`���ɃN���X�t�F�[�h���s���ƕ\���ʒu�����������C��
// 1.3.0 2016/02/28 �Z���ԍ���ϐ��ƘA������@�\��ǉ�
//                  �����̕��ׂ������y��
// 1.2.3 2016/02/07 �퓬��ʂł��s�N�`���̃A�j���[�V�������ł���悤�ɏC��
// 1.2.2 2016/01/24 ��̃s�N�`����\�����悤�Ƃ����ۂɃG���[���������錻�ۂ��C��
// 1.2.1 2016/01/16 �����摜���w�肵�ăs�N�`���\�����A�j���[�V�����������s�N�`���\���̏��Ŏ��s����
//                  �ꍇ�ɃG���[���������錻�ۂ̏C��
// 1.2.0 2016/01/04 �Z���̃p�^�[�������R�Ɏw��ł���@�\��ǉ�
//                  �Z���̍ő吔��100����200�Ɋg��
// 1.1.2 2015/12/24 �N���X�t�F�[�h�ɂ��摜�ؑւɑΉ����܂���
// 1.1.1 2015/12/21 �s�N�`���̃t�@�C������A�ԕ����Ŏw��ł���@�\��ǉ�
//                  �A�j���[�V�����̋����I���̋@�\��ǉ�
// 1.0.0 2015/12/19 ����
// ----------------------------------------------------------------------------
// [Blog]   : http://triacontane.blogspot.jp/
// [Twitter]: https://twitter.com/triacontane/
// [GitHub] : https://github.com/triacontane/
//=============================================================================

/*:
 * @plugindesc �s�N�`���̃A�j���[�V�����v���O�C��
 * @author �g���A�R���^��
 * 
 * @help �w�肵���t���[���Ԋu�Ńs�N�`�����A�j���[�V�������܂��B
 * �A�j���[�V�����������Z���摜�i���j��p�ӂ̏�
 * �ȉ��̃R�}���h����͂��Ă��������B
 *
 * 1. �s�N�`���̃A�j���[�V���������i�v���O�C���R�}���h�j
 * 2. �s�N�`���̕\���i�ʏ�̃C�x���g�R�}���h�j
 * 3. �s�N�`���̃A�j���[�V�����J�n�i�v���O�C���R�}���h�j
 * 4. �s�N�`���̃A�j���[�V�����I���i�v���O�C���R�}���h�j
 *
 * ���z�u���@�͈ȉ���3�ʂ肪����܂��B
 *  �c�@�F�Z�����c�ɕ��ׂđS�̂���̃t�@�C���ɂ��܂��B
 *  ���@�F�Z�������ɕ��ׂđS�̂���̃t�@�C���ɂ��܂��B
 *  �A�ԁF�A�Ԃ̃Z���摜�𕡐��p�ӂ��܂��B(original�����͔C�ӂ̕�����)
 *   original00.png(�s�N�`���̕\���Ŏw�肷��I���W�i���t�@�C��)
 *   original01.png
 *   original02.png...
 *
 * �v���ӁI�@�z�u���@�̘A�Ԃ��g���ꍇ�A�f�v���C�����g����
 * ���g�p�t�@�C���Ƃ��ď��O�����\��������܂��B
 * ���̏ꍇ�A�폜���ꂽ�t�@�C������꒼�����̑Ή����K�v�ł��B
 *
 * �܂��A�P�ɃA�j���[�V����������ȊO�ɂ��A�v���O�C���R�}���h����
 * �Z���ԍ��𒼐ڎw�肵����A�ϐ��̒l�ƃZ���ԍ���A����������ł��܂��B
 * ���ŋ��̂悤�ȉ��o��A��������ŗ����G�̕\����Ԃ�ω��������肷��ꍇ��
 * �L���ł��B
 *
 * �v���O�C���R�}���h�ڍ�
 *  �C�x���g�R�}���h�u�v���O�C���R�}���h�v������s�B
 *  �i�p�����[�^�̊Ԃ͔��p�X�y�[�X�ŋ�؂�j
 *
 *  PA_INIT or
 *  �s�N�`���̃A�j���[�V�������� [�Z����] [�t���[����] [�Z���z�u���@] [�t�F�[�h����]
 *  �@�s�N�`�����A�j���[�V�����Ώۂɂ��鏀�������܂��B
 *  �@�u�s�N�`���̕\���v�̒��O�Ɏ��s���Ă��������B
 *  �@�Z�����@�@�@�F�A�j���[�V��������Z����̐��i�ő�200���j
 *  �@�t���[�����@�F�A�j���[�V�����Ԋu�̃t���[�����i�Œ�ł�1��ݒ�j
 *  �@�Z���z�u�����F�Z���̔z�u�i�c or �� or �A�ԁj
 *  �@�t�F�[�h���ԁF�摜�ؑւɊ|����t���[�����i0�ɂ���ƃt�F�[�h���Ȃ��j
 *  �g�p��FPA_INIT 4 10 �A�� 20
 *
 *  PA_START or
 *  �s�N�`���̃A�j���[�V�����J�n [�s�N�`���ԍ�] [�A�j���[�V�����^�C�v] [�J�X�^���p�^�[���z��]
 *  �@�w�肵���s�N�`���ԍ��̃s�N�`�����A�j���[�V�������J�n���܂��B
 *  �@�������ƃA�j���[�V�����͎����Ŏ~�܂�܂��B
 *
 *  �@�A�j���[�V�����̃^�C�v�͈ȉ���3�p�^�[��������܂��B
 *  �@�@��F�Z������ 4 �̏ꍇ
 *  �@�@�@�^�C�v1: 1��2��3��4��1��2��3��4...
 *  �@�@�@�^�C�v2: 1��2��3��4��3��2��1��2...
 *  �@�@�@�^�C�v3: �D���ȏ��Ԃ�z��Ŏw��i�Z���̍ŏ��l�� 1 �ł��j
 *  �g�p��FPA_START 1 2
 *  �@�@�@�@PA_START 1 3 [1,2,1,3,1,4]
 *
 *  PA_START_LOOP or
 *  �s�N�`���̃��[�v�A�j���[�V�����J�n [�s�N�`���ԍ�] [�A�j���[�V�����^�C�v] [�J�X�^���p�^�[���z��]
 *  �@�w�肵���s�N�`���ԍ��̃s�N�`�����A�j���[�V�������J�n���܂��B
 *  �@�����I�ɏI������܂ŃA�j���[�V�����������܂��B
 *  �g�p��FPA_START_LOOP 1 2
 *  �@�@�@�@PA_START_LOOP 1 3 [1,2,1,3,1,4]
 *
 *  PA_STOP or
 *  �s�N�`���̃A�j���[�V�����I�� [�s�N�`���ԍ�]
 *  �@�w�肵���s�N�`���ԍ��̃s�N�`�����A�j���[�V�������I�����܂��B
 *  �@��ԏ�̃Z���ɖ߂������_�ŃA�j���[�V�������~�܂�܂��B
 *  �g�p��FPA_STOP 1
 *
 *  PA_STOP_FORCE or
 *  �s�N�`���̃A�j���[�V���������I�� [�s�N�`���ԍ�]
 *  �@�w�肵���s�N�`���ԍ��̃s�N�`�����A�j���[�V�������I�����܂��B
 *  �@���ݕ\�����Ă���Z���ŃA�j���[�V�������~�܂�܂��B
 *  �g�p��FPA_STOP_FORCE 1
 *
 *  PA_SET_CELL or
 *  �s�N�`���̃A�j���[�V�����Z���ݒ� [�s�N�`���ԍ�] [�Z���ԍ�] [�E�F�C�g����]
 *  �@�A�j���[�V�����̃Z���𒼐ڐݒ肵�܂��B�i�Z���̍ŏ��l�� 1 �ł��j
 *  �@�C�ӂ̃^�C�~���O�ŃA�j���[�V�����������ꍇ�ɗL���ł��B
 *  �@�E�F�C�g�����ݒ肷��ƁA�N���X�t�F�[�h���̓C�x���g�̎��s��ҋ@���܂��B
 *  �g�p��FPA_SET_CELL 1 3 �E�F�C�g����
 *
 *  PA_PROG_CELL or
 *  �s�N�`���̃A�j���[�V�����Z���i�s [�s�N�`���ԍ�] [�E�F�C�g����]
 *  �@�A�j���[�V�����̃Z�����ЂƂ�ɐi�߂܂��B
 *  �@�C�ӂ̃^�C�~���O�ŃA�j���[�V�����������ꍇ�ɗL���ł��B
 *  �@�E�F�C�g�����ݒ肷��ƁA�N���X�t�F�[�h���̓C�x���g�̎��s��ҋ@���܂��B
 *  �g�p��FPA_PROG_CELL 1 �E�F�C�g����
 *
 *  PA_SET_VARIABLE or
 *  �s�N�`���̃A�j���[�V�����Z���ϐ��̐ݒ� [�s�N�`���ԍ�] [�ϐ��ԍ�]
 *  �@�A�j���[�V�����̃Z�����w�肵���ϐ��ƘA�������܂��B
 *  �@�ϐ��̒l���ω�����ƕ\�����Ă���Z���������I�ɕω����܂��B
 *  �g�p��FPA_SET_VARIABLE 1 2
 *
 *  PA_SOUND or
 *  �s�N�`���̃A�j���[�V�������ʉ��\�� [�Z���ԍ�]
 *  �@�A�j���[�V�����̃Z�����؂�ւ�����^�C�~���O�Ō��ʉ������t���܂��B
 *  �@���̃R�}���h�̒���ɃC�x���g�R�}���h�uSE�̉��t�v�����s�����
 *  �@���̏��SE�͉��t���ꂸ�A�s�N�`���̃A�j���[�V�����J�n��Ɏw��̃^�C�~���O��
 *  �@���t�����悤�ɂȂ�܂��B
 *  �@�K���s�N�`���̃A�j���[�V�����J�n�O�Ɏ��s���Ă��������B
 *
 * ���p�K��F
 *  ��҂ɖ��f�ŉ��ρA�Ĕz�z���\�ŁA���p�`�ԁi���p�A18�֗��p���j
 *  �ɂ��Ă������͂���܂���B
 *  ���̃v���O�C���͂������Ȃ��̂��̂ł��B
 */
(function() {
    'use strict';
    var settings = {
        /* maxCellAnimation:�Z�����̍ő�l */
        maxCellAnimation: 200
    };

    //=============================================================================
    // ���[�J���֐�
    //  �v���O�C���p�����[�^��v���O�C���R�}���h�p�����[�^�̐��`��`�F�b�N�����܂�
    //=============================================================================
    var getCommandName = function(command) {
        return (command || '').toUpperCase();
    };

    var getArgArrayString = function(args, upperFlg) {
        var values = getArgString(args, upperFlg);
        return (values || '').split(',');
    };

    var getArgArrayNumber = function(args, min, max) {
        var values = getArgArrayString(args, false);
        if (arguments.length < 2) min = -Infinity;
        if (arguments.length < 3) max = Infinity;
        for (var i = 0; i < values.length; i++) values[i] = (parseInt(values[i], 10) || 0).clamp(min, max);
        return values;
    };

    var getArgString = function(arg, upperFlg) {
        arg = convertEscapeCharacters(arg);
        return upperFlg ? arg.toUpperCase() : arg;
    };

    var getArgNumber = function(arg, min, max) {
        if (arguments.length < 2) min = -Infinity;
        if (arguments.length < 3) max = Infinity;
        return (parseInt(convertEscapeCharacters(arg), 10) || 0).clamp(min, max);
    };

    var convertEscapeCharacters = function(text) {
        if (text == null) text = '';
        var window = SceneManager._scene._windowLayer.children[0];
        return window ? window.convertEscapeCharacters(text) : text;
    };

    //=============================================================================
    // Game_Interpreter
    //  �v���O�C���R�}���h��ǉ���`���܂��B
    //=============================================================================
    var _Game_Interpreter_pluginCommand      = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        try {
            this.pluginCommandPictureAnimation(command, args);
        } catch (e) {
            if ($gameTemp.isPlaytest() && Utils.isNwjs()) {
                var window = require('nw.gui').Window.get();
                if (!window.isDevToolsOpen()) {
                    var devTool = window.showDevTools();
                    devTool.moveTo(0, 0);
                    devTool.resizeTo(Graphics.width, Graphics.height);
                    window.focus();
                }
            }
            console.log('�v���O�C���R�}���h�̎��s���ɃG���[���������܂����B');
            console.log('- �R�}���h�� �@: ' + command);
            console.log('- �R�}���h���� : ' + args);
            console.log('- �G���[����   : ' + e.toString());
        }
    };

    Game_Interpreter.prototype.pluginCommandPictureAnimation = function(command, args) {
        var pictureNum, animationType, picture, cellNumber, frameNumber, direction, fadeDuration, wait, customArray;
        switch (getCommandName(command)) {
            case 'PA_INIT' :
            case '�s�N�`���̃A�j���[�V��������':
                cellNumber   = getArgNumber(args[0], 1, settings.maxCellAnimation);
                frameNumber  = getArgNumber(args[1], 1, 9999);
                direction    = getArgString(args[2], true) || '�c';
                fadeDuration = getArgNumber(args[3], 0, 9999) || 0;
                $gameScreen.setPicturesAnimation(cellNumber, frameNumber, direction, fadeDuration);
                break;
            case 'PA_SOUND' :
            case '�s�N�`���̃A�j���[�V�������ʉ��\��':
                cellNumber = getArgNumber(args[0], 1, settings.maxCellAnimation);
                this.reservePaSound(cellNumber);
                break;
            case 'PA_START' :
            case '�s�N�`���̃A�j���[�V�����J�n':
                pictureNum    = getArgNumber(args[0], 1, $gameScreen.maxPictures());
                animationType = getArgNumber(args[1], 1, 3);
                customArray   = getArgArrayNumber(args[2], 1, settings.maxCellAnimation);
                picture       = $gameScreen.picture(pictureNum);
                if (picture) picture.startAnimationFrame(animationType, false, customArray);
                break;
            case 'PA_START_LOOP' :
            case '�s�N�`���̃��[�v�A�j���[�V�����J�n':
                pictureNum    = getArgNumber(args[0], 1, $gameScreen.maxPictures());
                animationType = getArgNumber(args[1], 1, 3);
                customArray   = getArgArrayNumber(args[2], 1, settings.maxCellAnimation);
                picture       = $gameScreen.picture(pictureNum);
                if (picture) picture.startAnimationFrame(animationType, true, customArray);
                break;
            case 'PA_STOP' :
            case '�s�N�`���̃A�j���[�V�����I��':
                pictureNum = getArgNumber(args[0], 1, $gameScreen.maxPictures());
                picture    = $gameScreen.picture(pictureNum);
                if (picture) picture.stopAnimationFrame(false);
                break;
            case 'PA_STOP_FORCE' :
            case '�s�N�`���̃A�j���[�V���������I��':
                pictureNum = getArgNumber(args[0], 1, $gameScreen.maxPictures());
                picture    = $gameScreen.picture(pictureNum);
                if (picture) picture.stopAnimationFrame(true);
                break;
            case 'PA_SET_CELL' :
            case '�s�N�`���̃A�j���[�V�����Z���ݒ�':
                pictureNum = getArgNumber(args[0], 1, $gameScreen.maxPictures());
                cellNumber = getArgNumber(args[1], 1, settings.maxCellAnimation);
                wait       = getArgString(args[2]);
                picture    = $gameScreen.picture(pictureNum);
                if (picture) {
                    if (wait === '�E�F�C�g����' || wait.toUpperCase() === 'WAIT') this.wait(picture._fadeDuration);
                    picture.cell = cellNumber;
                }
                break;
            case 'PA_PROG_CELL' :
            case '�s�N�`���̃A�j���[�V�����Z���i�s':
                pictureNum = getArgNumber(args[0], 1, $gameScreen.maxPictures());
                wait       = getArgString(args[1]);
                picture    = $gameScreen.picture(pictureNum);
                if (picture) {
                    if (wait === '�E�F�C�g����' || wait.toUpperCase() === 'WAIT') this.wait(picture._fadeDuration);
                    picture.addCellCount();
                }
                break;
            case 'PA_SET_VARIABLE' :
            case '�s�N�`���̃A�j���[�V�����Z���ϐ��̐ݒ�':
                pictureNum = getArgNumber(args[0], 1, $gameScreen.maxPictures());
                picture    = $gameScreen.picture(pictureNum);
                if (picture) picture.linkToVariable(getArgNumber(args[1]));
                break;
        }
    };

    Game_Interpreter.prototype.reservePaSound = function(cellNumber) {
        this._paSoundFrame = cellNumber;
    };

    var _Game_Interpreter_command250      = Game_Interpreter.prototype.command250;
    Game_Interpreter.prototype.command250 = function() {
        if (this._paSoundFrame) {
            var se = this._params[0];
            AudioManager.loadStaticSe(se);
            $gameScreen.addPaSound(se, this._paSoundFrame);
            this._paSoundFrame = null;
            return true;
        }
        return _Game_Interpreter_command250.apply(this, arguments);
    };

    //=============================================================================
    // Game_Screen
    //  �A�j���[�V�����֘A�̏���ǉ��ŕێ����܂��B
    //=============================================================================
    Game_Screen.prototype.setPicturesAnimation = function(cellNumber, frameNumber, direction, fadeDuration) {
        this._paCellNumber   = cellNumber;
        this._paFrameNumber  = frameNumber;
        this._paDirection    = direction;
        this._paFadeDuration = fadeDuration;
    };

    Game_Screen.prototype.addPaSound = function(sound, frame) {
        if (!this._paSounds) this._paSounds = [];
        this._paSounds[frame] = sound;
    };

    Game_Screen.prototype.clearPicturesAnimation = function() {
        this._paCellNumber   = 1;
        this._paFrameNumber  = 1;
        this._paDirection    = '';
        this._paFadeDuration = 0;
        this._paSounds       = null;
    };

    var _Game_Screen_showPicture      = Game_Screen.prototype.showPicture;
    Game_Screen.prototype.showPicture = function(pictureId, name, origin, x, y,
                                                 scaleX, scaleY, opacity, blendMode) {
        _Game_Screen_showPicture.apply(this, arguments);
        var realPictureId = this.realPictureId(pictureId);
        if (this._paCellNumber > 1) {
            this._pictures[realPictureId].setAnimationFrameInit(
                this._paCellNumber, this._paFrameNumber, this._paDirection, this._paFadeDuration, this._paSounds);
            this.clearPicturesAnimation();
        }
    };

    //=============================================================================
    // Game_Picture
    //  �A�j���[�V�����֘A�̏���ǉ��ŕێ����܂��B
    //=============================================================================
    var _Game_Picture_initialize      = Game_Picture.prototype.initialize;
    Game_Picture.prototype.initialize = function() {
        _Game_Picture_initialize.call(this);
        this.initAnimationFrameInfo();
    };

    Game_Picture.prototype.initAnimationFrameInfo = function() {
        this._cellNumber        = 1;
        this._frameNumber       = 1;
        this._cellCount         = 0;
        this._frameCount        = 0;
        this._animationType     = 0;
        this._customArray       = null;
        this._loopFlg           = false;
        this._direction         = '';
        this._fadeDuration      = 0;
        this._fadeDurationCount = 0;
        this._prevCellCount     = 0;
        this._animationFlg      = false;
        this._linkedVariable    = 0;
        this._cellSes           = [];
    };

    Game_Picture.prototype.direction = function() {
        return this._direction;
    };

    Game_Picture.prototype.cellNumber = function() {
        return this._cellNumber;
    };

    Game_Picture.prototype.prevCellCount = function() {
        return this._prevCellCount;
    };

    Game_Picture.prototype.isMulti = function() {
        var dir = this.direction();
        return dir === '�A��' || dir === 'N';
    };

    /**
     * The cellCount of the Game_Picture (0 to cellNumber).
     *
     * @property cellCount
     * @type Number
     */
    Object.defineProperty(Game_Picture.prototype, 'cell', {
        get         : function() {
            if (this._linkedVariable > 0) {
                return $gameVariables.value(this._linkedVariable) % this._cellNumber;
            }
            switch (this._animationType) {
                case 3:
                    return (this._customArray[this._cellCount] - 1).clamp(0, this._cellNumber - 1);
                case 2:
                    return this._cellNumber - 1 - Math.abs(this._cellCount - (this._cellNumber - 1));
                case 1:
                    return this._cellCount;
                default:
                    return this._cellCount;
            }
        },
        set         : function(value) {
            var newCellCount = value % this.getCellNumber();
            if (this._cellCount !== newCellCount) {
                this._prevCellCount     = this.cell;
                this._fadeDurationCount = this._fadeDuration;
            }
            this._cellCount = newCellCount;
        },
        configurable: true
    });

    Game_Picture.prototype.getCellNumber = function() {
        switch (this._animationType) {
            case 3:
                return this._customArray.length;
            case 2:
                return (this._cellNumber - 1) * 2;
            case 1:
                return this._cellNumber;
            default:
                return this._cellNumber;
        }
    };

    var _Game_Picture_update      = Game_Picture.prototype.update;
    Game_Picture.prototype.update = function() {
        _Game_Picture_update.call(this);
        if (this.isFading()) {
            this.updateFading();
        } else if (this.hasAnimationFrame()) {
            this.updateAnimationFrame();
        }
    };

    Game_Picture.prototype.linkToVariable = function(variableNumber) {
        this._linkedVariable = variableNumber.clamp(1, $dataSystem.variables.length);
    };

    Game_Picture.prototype.updateAnimationFrame = function() {
        this._frameCount = (this._frameCount + 1) % this._frameNumber;
        if (this._frameCount === 0) {
            this.addCellCount();
            this.playCellSe();
            if (this._cellCount === 0 && !this._loopFlg) {
                this._animationFlg = false;
            }
        }
    };

    Game_Picture.prototype.updateFading = function() {
        this._fadeDurationCount--;
    };

    Game_Picture.prototype.prevCellOpacity = function() {
        if (this._fadeDuration === 0) return 0;
        return this.opacity() / this._fadeDuration * this._fadeDurationCount;
    };

    Game_Picture.prototype.addCellCount = function() {
        this.cell = this._cellCount + 1;
    };

    Game_Picture.prototype.playCellSe = function() {
        var se = this._cellSes[this.cell + 1];
        if (se)  {
            AudioManager.playSe(se);
        }
    };

    Game_Picture.prototype.setAnimationFrameInit = function(cellNumber, frameNumber, direction, fadeDuration, cellSes) {
        this._cellNumber   = cellNumber;
        this._frameNumber  = frameNumber;
        this._frameCount   = 0;
        this._cellCount    = 0;
        this._direction    = direction;
        this._fadeDuration = fadeDuration;
        this._cellSes      = cellSes || [];
    };

    Game_Picture.prototype.startAnimationFrame = function(animationType, loopFlg, customArray) {
        this._animationType = animationType;
        this._customArray   = customArray;
        this._animationFlg  = true;
        this._loopFlg       = loopFlg;
    };

    Game_Picture.prototype.stopAnimationFrame = function(forceFlg) {
        this._loopFlg = false;
        if (forceFlg) this._animationFlg = false;
    };

    Game_Picture.prototype.hasAnimationFrame = function() {
        return this._animationFlg;
    };

    Game_Picture.prototype.isFading = function() {
        return this._fadeDurationCount !== 0;
    };

    Game_Picture.prototype.isNeedFade = function() {
        return this._fadeDuration !== 0;
    };

    //=============================================================================
    // Sprite_Picture
    //  �A�j���[�V�����֘A�̏���ǉ��ŕێ����܂��B
    //=============================================================================
    var _Sprite_Picture_initialize      = Sprite_Picture.prototype.initialize;
    Sprite_Picture.prototype.initialize = function(pictureId) {
        this._prevSprite = null;
        _Sprite_Picture_initialize.apply(this, arguments);
    };

    var _Sprite_Picture_update      = Sprite_Picture.prototype.update;
    Sprite_Picture.prototype.update = function() {
        _Sprite_Picture_update.apply(this, arguments);
        var picture = this.picture();
        if (picture && picture.name()) {
            if (picture.isMulti() && !this._bitmaps) {
                this.loadAnimationBitmap();
            }
            if (this.isBitmapReady()) {
                this.updateAnimationFrame(this, picture.cell);
                if (picture.isNeedFade()) this.updateFading();
            }
        }
    };

    var _Sprite_Picture_updateBitmap      = Sprite_Picture.prototype.updateBitmap;
    Sprite_Picture.prototype.updateBitmap = function() {
        _Sprite_Picture_updateBitmap.apply(this, arguments);
        if (!this.picture()) {
            this._bitmaps = null;
            if (this._prevSprite) {
                this._prevSprite.bitmap = null;
            }
        }
    };

    Sprite_Picture.prototype.updateFading = function() {
        if (!this._prevSprite) {
            this.makePrevSprite();
        }
        if (!this._prevSprite.bitmap) {
            this.makePrevBitmap();
        }
        var picture = this.picture();
        if (picture.isFading()) {
            this._prevSprite.visible = true;
            this.updateAnimationFrame(this._prevSprite, picture.prevCellCount());
            this._prevSprite.opacity = picture.prevCellOpacity();
        } else {
            this._prevSprite.visible = false;
        }
    };

    Sprite_Picture.prototype.updateAnimationFrame = function(sprite, cellCount) {
        switch (this.picture().direction()) {
            case '�A��':
            case 'N':
                sprite.bitmap = this._bitmaps[cellCount];
                sprite.setFrame(0, 0, sprite.bitmap.width, sprite.bitmap.height);
                break;
            case '�c':
            case 'V':
                var height = sprite.bitmap.height / this.picture().cellNumber();
                var y      = cellCount * height;
                sprite.setFrame(0, y, sprite.bitmap.width, height);
                break;
            case '��':
            case 'H':
                var width = sprite.bitmap.width / this.picture().cellNumber();
                var x     = cellCount * width;
                sprite.setFrame(x, 0, width, this.bitmap.height);
                break;
        }
    };

    var _Sprite_Picture_loadBitmap      = Sprite_Picture.prototype.loadBitmap;
    Sprite_Picture.prototype.loadBitmap = function() {
        _Sprite_Picture_loadBitmap.apply(this, arguments);
        this._bitmapReady = false;
        this._bitmaps     = null;
    };

    Sprite_Picture.prototype.loadAnimationBitmap = function() {
        var cellNumber = this.picture().cellNumber();
        var cellDigit  = cellNumber.toString().length;
        this._bitmaps  = [this.bitmap];
        for (var i = 1; i < cellNumber; i++) {
            var filename     = this._pictureName.substr(0, this._pictureName.length - cellDigit) + i.padZero(cellDigit);
            this._bitmaps[i] = ImageManager.loadPicture(filename);
        }
        this._bitmapReady = false;
    };

    Sprite_Picture.prototype.makePrevSprite = function() {
        this._prevSprite         = new Sprite();
        this._prevSprite.visible = false;
        this.addChild(this._prevSprite);
    };

    Sprite_Picture.prototype.makePrevBitmap = function() {
        this._prevSprite.bitmap   = this.bitmap;
        this._prevSprite.anchor.x = this.anchor.x;
        this._prevSprite.anchor.y = this.anchor.y;
    };

    Sprite_Picture.prototype.isBitmapReady = function() {
        if (!this.bitmap) return false;
        if (this._bitmapReady) return true;
        var result;
        if (this.picture().isMulti()) {
            result = this._bitmaps.every(function(bitmap) {
                return bitmap.isReady();
            });
        } else {
            result = this.bitmap.isReady();
        }
        this._bitmapReady = result;
        return result;
    };
})();