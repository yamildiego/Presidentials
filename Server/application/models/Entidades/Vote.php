<?php

/**
 * Vote
 *
 * @Table(name="vote")
 * @Entity
 */
class Vote
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
     * @var integer
     *
     * @Column(name="president", type="integer", nullable=false)
     */
    private $president;

    /**
     * @var integer
     *
     * @Column(name="vicepresident", type="integer", nullable=true)
     */
    private $vicepresident;

    /**
     * @var string
     *
     * @Column(name="dni", type="string", length=20, nullable=true)
     */
    private $dni;

    /**
     * @var string
     *
     * @Column(name="last_name", type="string", length=50, nullable=true)
     */
    private $lastName;

    /**
     * @var integer
     *
     * @Column(name="quantity", type="integer", nullable=true)
     */
    private $quantity;

    /**
     * @var string
     *
     * @Column(name="ip", type="string", length=20, nullable=false)
     */
    private $ip;

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
     * Set president
     *
     * @param integer $president
     *
     * @return Vote
     */
    public function setPresident($president)
    {
        $this->president = $president;

        return $this;
    }

    /**
     * Get president
     *
     * @return integer
     */
    public function getPresident()
    {
        return $this->president;
    }

    /**
     * Set vicepresident
     *
     * @param integer $vicepresident
     *
     * @return Vote
     */
    public function setVicepresident($vicepresident)
    {
        $this->vicepresident = $vicepresident;

        return $this;
    }

    /**
     * Get vicepresident
     *
     * @return integer
     */
    public function getVicepresident()
    {
        return $this->vicepresident;
    }

    /**
     * Set dni
     *
     * @param string $dni
     *
     * @return Vote
     */
    public function setDni($dni)
    {
        $this->dni = $dni;

        return $this;
    }

    /**
     * Get dni
     *
     * @return string
     */
    public function getDni()
    {
        return $this->dni;
    }

    /**
     * Set lastName
     *
     * @param string $lastName
     *
     * @return Vote
     */
    public function setLastName($lastName)
    {
        $this->lastName = $lastName;

        return $this;
    }

    /**
     * Get lastName
     *
     * @return string
     */
    public function getLastName()
    {
        return $this->lastName;
    }

    /**
     * Set quantity
     *
     * @param integer $quantity
     *
     * @return Vote
     */
    public function setQuantity($quantity)
    {
        $this->quantity = $quantity;

        return $this;
    }

    /**
     * Get quantity
     *
     * @return integer
     */
    public function getQuantity()
    {
        return $this->quantity;
    }

    /**
     * Set ip
     *
     * @param string $ip
     *
     * @return Vote
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
}