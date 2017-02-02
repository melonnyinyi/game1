// HP�̕������A�C�R��(84)�ɕύX
Window_Base.prototype.drawActorHp = function(actor, x, y, width) {
    width = width || 186;
    var color1 = this.hpGaugeColor1();
    var color2 = this.hpGaugeColor2();
//    this.drawGauge(x, y, width, actor.hpRate(), color1, color2);
    this.drawGauge(x+40, y, width - 40, actor.hpRate(), color1, color2);
    this.changeTextColor(this.systemColor());
//    this.drawText(TextManager.hpA, x, y, 44);
	this.drawIcon(84, x, y);
    this.drawCurrentAndMax(actor.hp, actor.mhp, x, y, width,
                           this.hpColor(actor), this.normalColor());
};

// �S�[���h�̕������A�C�R��(314)�ɕύX�A��납��O�ֈړ�
Window_Base.prototype.drawCurrencyValue = function(value, unit, x, y, width) {
    var unitWidth = Math.min(80, this.textWidth(unit));
    this.resetTextColor();
    this.drawText(value, x + 20, y, width - unitWidth - 1, 'right');
    this.changeTextColor(this.systemColor());
//    this.drawText(unit, x + width - unitWidth, y, unitWidth, 'right');
	this.drawIcon(314, x, y);
};