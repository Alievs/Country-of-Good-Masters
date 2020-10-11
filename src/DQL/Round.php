<?php

namespace App\DQL;


use Doctrine\ORM\Query\AST\Functions\FunctionNode;
use Doctrine\ORM\Query\Lexer;

class Round extends FunctionNode
{

    protected $roundExp;
    protected $roundPrecission;

    /**
     * @param \Doctrine\ORM\Query\SqlWalker $sqlWalker
     *
     * @return string
     */
    public function getSql(\Doctrine\ORM\Query\SqlWalker $sqlWalker)
    {
        return 'ROUND(' .
            $sqlWalker->walkArithmeticExpression($this->roundExp) . ','.
            $sqlWalker->walkArithmeticExpression($this->roundPrecission)
            .')';
    }

    /**
     * @param \Doctrine\ORM\Query\Parser $parser
     * @return void
     * @throws \Doctrine\ORM\Query\QueryException
     */
    public function parse(\Doctrine\ORM\Query\Parser $parser)
    {
        $parser->match(Lexer::T_IDENTIFIER);
        $parser->match(Lexer::T_OPEN_PARENTHESIS);

        $this->roundExp = $parser->ArithmeticExpression(); // Указываем первое значение функции
        $parser->match(Lexer::T_COMMA); // Добавим разделитель
        $this->roundPrecission = $parser->ArithmeticExpression(); // И добавим второе значение

        $parser->match(Lexer::T_CLOSE_PARENTHESIS);
    }
}