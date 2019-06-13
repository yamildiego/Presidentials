<?php

/**
 * Vicepresident
 *
 * @Table(name="vicepresident")
 * @Entity
 */
class Vicepresident
{
    /**
     * @var integer
     *
     * @Column(name="id", type="integer", nullable=false)
     * @Id
     * @GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     *
     * @Column(name="ip", type="string", length=20, nullable=false)
     */
    private $ip;

    /**
     * @var integer
     *
     * @Column(name="vote", type="integer", nullable=false)
     */
    private $vote;


    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set ip
     *
     * @param string $ip
     *
     * @return Vicepresident
     */
    public function setIp($ip)
    {
        $this->ip = $ip;

        return $this;
    }

    /**
     * Get ip
     *
     * @return string
     */
    public function getIp()
    {
        return $this->ip;
    }

    /**
     * Set vote
     *
     * @param integer $vote
     *
     * @return Vicepresident
     */
    public function setVote($vote)
    {
        $this->vote = $vote;

        return $this;
    }

    /**
     * Get vote
     *
     * @return integer
     */
    public function getVote()
    {
        return $this->vote;
    }
}

